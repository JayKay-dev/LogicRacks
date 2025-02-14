import './App.css';
import Counter from './components/Counter';
import PracticeProps from './components/PracticeProps';


function App() {
  return (
    <>
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <div className="container">
        <PracticeProps heading="Maze Runner" description="Thomas loses his memory and finds himself trapped in a massive maze called the Glade. He and his friends try to escape from the maze and eventually learn that they are subjects of an experiment. With a new boy arriving every thirty days, the group has been in The Glade for three years, trying to find a way to escape through the Maze." imgurl="https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_FMjpg_UX1000_.jpg" />
        <PracticeProps heading="Harry Potter Novel Series" description="Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry." imgurl="https://images.squarespace-cdn.com/content/v1/5130288ce4b0973b4dbbe61a/6e9867c5-25bf-443f-bd09-7594a15fa5a1/tempImaged7CfvY.jpg" />
        <PracticeProps heading="Video Games" description="Video games make a much better pastime as they allow you to challenge yourself, engage with unique communities, and experience new things. Most people play video games for fun and it's a harmless hobby. However, for others, gaming can become an unhealthy habit with negative repercussions." imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfju3urKYbMfMgeJ4lEz-BSnLbQv03aKeBA&s" />
      </div>
    </>
  );
}

export default App;
