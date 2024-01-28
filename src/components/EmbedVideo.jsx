/* eslint-disable react/prop-types */

const EmbedVideo = ({ videoID }) => {
  return (
    <div className="h-[250px] w-full border-2 p-2 mb-3">
      <iframe
        src={`https://www.youtube.com/embed/${videoID}`}
        className="h-full w-full"
        title="Narendra"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default EmbedVideo;
