import React, { useEffect } from 'react';
import { history } from 'umi';
import { useObserveHook } from '@/hook';

export interface ITestProps {}

let observer: IntersectionObserver;
export default function Test(props: ITestProps) {
  useObserveHook([], '#loading', entries => {
    console.log(entries);
  });

  

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <div>
        <div
          id="loading"
          style={{
            marginTop: '1000px',
            backgroundColor: '#f60',
            width: '100px',
            height: 100,
          }}
        ></div>

        <button onClick={handleClick}>点击</button>
      </div>
    </div>
  );
}
