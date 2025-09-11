import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Editor from "./components/Editor";
import "./App.css";

// Home page
const Home = () => {
  const navigate = useNavigate();

  const createNewDoc = () => {
    const id = uuidV4();
    navigate(`/editor/${id}`);
  };

  return (
    <div>
      <h1>Welcome to the Google Doc Clone</h1>
      <button onClick={createNewDoc}>Create a New Document</button>
    </div>
  );
};

// Wrapper to get docId from URL and pass to Editor
const EditorPage = () => {
  const { id } = useParams();
  return <Editor docId={id} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<EditorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
