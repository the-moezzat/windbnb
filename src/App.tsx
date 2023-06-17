import Body from './components/Body';
import Header from './components/Header';
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-3 flex flex-col justify-between max-md:py-4">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
