import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect } from 'react'
import { MEMBER_LISTS_REQUEST } from 'src/reducers/member';

function DetailList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.id;

  useEffect(()=>{
    const idQuery = `id=${id}`;
    dispatch({
      type: MEMBER_LISTS_REQUEST,
      query : `?${idQuery}`
    })
  },[dispatch, id]);

  const { memberLists } = useSelector((state) => state.member);
  return (
    <>
      <div>아이디 : {memberLists && memberLists.name}</div>
    </>
  )
}

export default DetailList