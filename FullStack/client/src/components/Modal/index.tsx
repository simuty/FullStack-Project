import * as React from 'react';
import CreatePortal from '../CreatePortal';
import { Icon } from 'antd-mobile'; 

export interface IModalProps {
  show: boolean;
  styleBody?: object;
  styleClose?: object;
  onClose: any
}

export interface IModalState {
  showModal: boolean;
}


const Styles = {
    modal: {
      position: 'relative',
      top: '0',
      left: '0',
      zIndex: '999'
    },
    body: {
      backgroundColor: '#fff',
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px'
    }
  };

export default class Modal extends React.Component<IModalProps, IModalState> {
  constructor(props: IModalProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({
      showModal: nextProps.show,
    });
  }

  handleClose = ()=>{
    const { onClose } = this.props;
    onClose && onClose();
  }


  public render() {
    const { show, styleBody, styleClose } = this.props;
    const { showModal } = this.state;
    const _styleBody = {
        ...Styles.body,
        ...styleBody
      };
      const _styleClose = {
        ...Styles.close,
        ...styleClose
      };
    return <div>{showModal ? 
    <CreatePortal style={Styles.modal}>
        <div style={_styleBody}>
        {this.props.children}
        <Icon type='cross' size='lg' style={_styleClose} onClick={this.handleClose} />
        </div>
    </CreatePortal> 
    : null}</div>;
  }
}
