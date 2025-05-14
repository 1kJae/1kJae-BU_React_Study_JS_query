import { useQueries } from '@tanstack/react-query'
import axios from 'axios'
// import React from 'react'
// import { usePostQuery } from './hooks/usePosts';

const ReactQueryPage = () => {
  const ids = [1, 2, 3, 4];
  
  const FetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
  }

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => FetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((results) => results.data.data),
      };
    },
  });
  console.log("rrrr", results);
  return <div></div>
    // const { data, isLoading, isError, error, refetch } = usePostQuery();
    // console.log("ddd", data, isLoading);
    // console.log("error", isError, error);

    // if(isLoading){
    //   return <h1>Loading...</h1>
    // }
    // if(isError){
    //   return <h1>{error.message}</h1>
    // }
    // return (
    //   <div>
    //     {data?.map((item) => (
    //       <div key={item.id}>{item.title}</div>
    //     ))}
    //     <button onClick={refetch}>post 리스트 다시 불러오기</button>
    //   </div>
    // );
};

export default ReactQueryPage