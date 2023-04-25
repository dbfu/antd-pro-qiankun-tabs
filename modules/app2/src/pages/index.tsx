import { useEffect } from 'react';
import { useModel } from 'umi'

import yayJpg from '../assets/yay.jpg';

export default function HomePage() {

  const { keepAliveHandle } = useModel('@@qiankunStateFromMaster');

  useEffect(() => {
    keepAliveHandle.onShow(() => {
      console.log('show');
    })

    keepAliveHandle.onHidden(() => {
      console.log('hidden');
    })
  }, []);

  return (
    <div style={{ height: 2000 }}>
      <input />
      <button
        onClick={() => {
          keepAliveHandle.refreshTab();
        }}
      >
        刷新
      </button>
      <button
        onClick={() => {
          keepAliveHandle.closeTab();
        }}
      >
        关闭
      </button>
      <button
        onClick={() => {
          keepAliveHandle.closeOhterTab();
        }}
      >
        关闭其他
      </button>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
