import './App.css';
import { Profile } from './Component/Profile';

function App() {
  const handleClick=(alertt)=>{
    alert(alertt);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Profile handleClick={handleClick}
        fullName='Chatti Aymen'
        Bio='Ensen heyel'
        profession='student'
        />
        <Profile>
          <h1>this is my child</h1>
          <img src='https://1.bp.blogspot.com/-medqqqNsXGg/X8Ppb9wM6zI/AAAAAAAAAa0/TR2CyDtnkQQAwdQ_F_GlEhm_kcyXCYgeQCLcBGAsYHQ/s1280/Hunter-x-Hunter.webp' alt="mela"/>
        </Profile>

      </header>
    </div>
  );
}


export default App;
