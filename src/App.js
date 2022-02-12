/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./Header.jsx";
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import './App.css';

const width = window.innerWidth;

const ProgressBar = ({ progressPercentage, title }) => {
  return (
    <div className="flex flex-wrap">
        <h1 className="text-right font-bold">
        {title}&nbsp;&nbsp;
        {progressPercentage}%
      </h1>
      <div className='w-full bg-gray-300 border-radius rounded-full h-4'>
          <div
            style={{ width: `${progressPercentage}%` }}
            className={`h-full rounded-full ${progressPercentage < 70 ? 'bg-indigo-600' : 'bg-indigo-600'}`}>
          </div>
        </div>
    </div>
    );
};

function App() {
  return (
    <div className="App">
      <Header />
      {/* make button in tailwind css */}
      <button style={{ marginTop: 100, marginBottom: 100 }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">I am a full-stack developer, from Uzbekistan.</button>

      <div className={`flex flex-wrap w-${width >= 1500 ? "2/3" : "2"} items-baseline	`} style={{ margin: "auto"}}>
          <div className="w-full md:w-1/2 p-3">
            <p className={`App-intro text-lg`} style={{  margin: "auto", width: `${width >= 1500 ? "50%" : "100%"}`}}>
              {/* about me */}
              Hello, my name is Abdukakhkhorov Ismoiljon. I am a full-stack developer, from Uzbekistan. I am a student of the Astrum IT Academy.
              I have 3 years of experience in the field of web development. I have a strong knowledge of the front-end and back-end technologies.
              I am a fast learner and a team player. I am always ready to learn new technologies.
              Now I am studying React.js and Node.js.I am passionate to create beautiful and functional web applications which can contain 1,000,000 users ; ).
            Connect with me on social networks: <div className="flex flex-wrap" style={{ marginTop: 40 }}>
              <a href="https://www.instagram.com/this.ismoil/" className="mx-auto" style={{fontSize: 30}}><FaInstagram /></a>
              <a href="https://github.com/devDoubleH/" className="mx-auto" style={{fontSize: 30}}><FaGithub /></a>
              <a href="https://dev.ismoiljon@gmail.com" className="mx-auto" style={{fontSize: 30}}><CgMail /></a>
              <a href="https://dev.ismoiljon@gmail.com" className="mx-auto" style={{fontSize: 30}}><CgMail /></a>
            </div>
          </p>
          </div>
          <div className="w-1/3"  style={{ marginTop: 100, margin: "auto" }}>
            <ProgressBar progressPercentage={70} title="HTML" />
            <br />
            <ProgressBar progressPercentage={80} title="CSS" />
            <br />
            <ProgressBar progressPercentage={80} title="JS" />
            <br />
          <ProgressBar progressPercentage={75} title="REACT" />
          <br />
          <ProgressBar progressPercentage={65} title="NODE"/>
        </div>
      </div>
      {/* make tailwind simple footer */}
      <footer className="bg-gray-800 text-white text-center py-4" style={{bottom: 0, position: "absolute", width: "100%"}}>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <p className="text-white">doubleh studio</p>
        </p>
      </footer>
    </div>
  );
}

export default App;
