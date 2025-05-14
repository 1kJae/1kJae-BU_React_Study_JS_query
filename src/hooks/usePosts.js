import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchPost = () => {
    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:3004/posts`)
};


export const usePostQuery = () => {
    return useQuery({
        queryKey:['posts'],
        queryFn: () => fetchPost(),
        retry: 1,
        select: (data)=>{
            return data.data;
        },
    });
};

//staleTime: 60000, // 1분간 api호출 금지, 기본값 0
//enabled: false, // 기본값은 true 
//refetchOnMount: false, // 다시 들어갈 때 호출 X, 기본값: true
//refetchOnWindowFocus: true, // 매번 새로운 데이터를 빠르게 알려줄 때
// refetchInterval: 3000, // 3초마다 호출
// gcTime: 10000, // 10초간 캐시가 유지 stale < gctime