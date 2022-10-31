import type { NextPage } from "next";
import axios from "axios";

import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { URL } from "../utils";
interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos Were Found"} />
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;
  if (topic) {
    response = await axios.get(`${URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${URL}/api/post`);
  }
  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;