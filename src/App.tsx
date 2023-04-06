import './App.css';

const App = () => {
  return (
    <>
      <h1>自己紹介</h1>
      <ul className="introduction_card">
        <li>前田達哉です。</li>
        <li>
          SIerに新卒で入社しました。研修中です。生き残れるように頑張りたいです。
        </li>
        <li>React、Next.js、JavaScriptなどの勉強をしています。</li>
      </ul>
      <h2>趣味</h2>
      <ul className="hobby_card">
        <li>
          ラジオを聞くことです。オードリーオールナイトニッポンを毎週聴いています。
        </li>
        <li>競馬は嗜む程度には、やっています。</li>
        <li>
          プロ野球チームの千葉ロッテを応援しています。好きな選手は益田選手です。
        </li>
      </ul>
    </>
  );
};

export default App;
