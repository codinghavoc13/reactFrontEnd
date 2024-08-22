import React from 'react';
import './App.css';
import { MainHome } from './main/components/MainHome';
import { Routes, Route } from 'react-router-dom'
import { BootstrapCheatSheetHome } from './bootstrapCheatSheet/BootstrapCheatSheetHome';
import { Layout } from './main/components/Layout';
import { ForumHome } from './forumSite/ForumHome';
import { SinglePostDetail } from './forumSite/components/SinglePostDetail';
import { RoomList } from './forumSite/components/RoomList';
import { PostList } from './forumSite/components/PostList';

function App() {
  /*Use the example in FS:RaJSB video 123 as an example to keep the footer at the bottom of the
  page */
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainHome />} />
          <Route path='bootstrapCheatSheet' element={<BootstrapCheatSheetHome />} />
          <Route path='forum' element={<ForumHome />} />
          {/* <Route path="forum/:id" element={<SinglePostDetail/>}/> */}
          <Route path='forum' element={<ForumHome />} />
          <Route path='forum/rooms' element={<RoomList />} />
          <Route path='forum/room/:id' element={<PostList />} />
          <Route path="forum/room/:roomId/post/:postId" element={<SinglePostDetail/>}/>
        </Route>
      </Routes>
  );
}

export default App;
