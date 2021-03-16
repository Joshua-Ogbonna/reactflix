import Row from "./components/Row";
import request from "./requests/requests";
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import './styles/netflix.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="post_row">
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      </div>
    </div>
  );
}

export default App;
