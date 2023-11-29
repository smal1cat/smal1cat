import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../components/Header/Header.css';
import '../../components/Footer/Footer.css';

function Home() {
  return (
    <>
      <Header></Header>


      <p class = "keyphrase"><a href="public\testserver.html">학사</a> 시설 교내혜택 과생활 교내활동</p>

      <p class = "question">질문 : 학교 친구, 선배들과 친해질 수 있는 기회가 있나요?</p>
      <div></div>
      <p class = "question">질문 </p>
      <div></div>
      <p class = "question">질문 </p>

      <Footer></Footer>
    </>
  );
}

export default Home;
