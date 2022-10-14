import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import EditorView from "../../components/Editor";

function CourseViewer() {
  const params = useParams();
  console.log(params);

  function downloadPdf() {
    window.location = "http://localhost:3000/certificate.pdf";
  }
  return (
    <div className="h-[calc(100vh_-_100px)] max-w-7xl mx-auto pt-20">
      <div className="grid grid-cols-2 py-5">
        <iframe
          className="rounded"
          width="660"
          height="415"
          src="https://www.youtube.com/embed/ok-plXXHlWw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="mx-3">
          <EditorView />
        </div>
      </div>
      <Button colorScheme={"green"} onClick={downloadPdf}>
        Mark as completed
      </Button>
    </div>
  );
}

export default CourseViewer;
