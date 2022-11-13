import {Navigate, Route, Routes} from "react-router-dom";
import {CardsList} from "../CardsList";
import {Post} from "../CardsList/Card/Post";
import React from "react";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path="/posts" element={<CardsList/>}>
        <Route path=":id" element={<Post/>}/>
      </Route>
      {['/', '/auth'].map((item, index)=>
        <Route path={item} element={<Navigate to="/posts" replace />} key={index}/>
      )}
      <Route path="*" element={<h3 style={{padding: '15px 0', textAlign:'center'}}>404 - Страница не найдена</h3>}/>
    </Routes>
  )
}