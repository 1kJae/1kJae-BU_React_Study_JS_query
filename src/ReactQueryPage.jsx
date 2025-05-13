import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ReactQueryPage = () => {
    const fetchPost=()=>{
        return axios.get('http://localhost:3004/posts')
    }
    const { isLoading, data, isError, error } = useQuery({
        queryKey:['posts'],
        queryFn:fetchPost,
        retry: 1,
        staleTime: 60000, // 1분간 api호출 금지, 기본값 0
        select: (data)=>{
          return data.data;
        },
        // gcTime: 10000, // 10초간 캐시가 유지 stale < gctime
    });
    console.log("ddd", data, isLoading);
    console.log("error", isError, error);

    if(isLoading){
      return <h1>Loading...</h1>
    }
    if(isError){
      return <h1>{error.message}</h1>
    }
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
};

export default ReactQueryPage