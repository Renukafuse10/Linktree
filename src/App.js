
import './App.css';
import LinkCard from './LinkCard/LinkCard'

function App() {
  const data=[
    {
      title:'twitter',
      tagline:'Follow Me On Twitter',
      username:'Renuka Fuse'
     
    },
    {
      title:'instagram',
      tagline:'Follow Me On Instagram',
      username:'Renuka Fuse',
      link:'https://instagram.com/s_w_a_n_i_k_a'
    },
    {
      title:'github',
      tagline:'Follow Me On Github',
      username:'Renuka Fuse',
      link:'https://github.com/Renukafuse10'
    },
    {
      title:'facebook',
      tagline:'Follow Me On Facebook',
      username:'Renuka Fuse',
      link:'https://www.facebook.com/profile.php?id=100009347830057'
    }
    
  ]
  return (
    <div className="container">
      <h3 className="app-head">Linktree-App</h3>
    {
      data.map((cardinfo)=>{
        return (<LinkCard
         title={cardinfo.title} 
        tagline={cardinfo.tagline}
        username={cardinfo.username}
        link={cardinfo.link}
        />
        );
      })
    }
      
    </div>
  );
}

export default App;
