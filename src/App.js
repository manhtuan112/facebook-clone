import React, { Component, useState, useEffect }  from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
function App() {

  const [inforPost, setInforPost] = useState([
    {
        message: 'Tuan',
        imgUrl: 'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png',
        time: "Hôm kia",
        timedate: "Ngày 20 tháng 10 lúc 19:10",
        comment: [
            {
                time: 1635004793573,
                content: "hello Manh Tuan",
                imgUrl : "https://photo-cms-viettimes.zadn.vn/w666/Uploaded/2021/aohuooh/2021_02_25/2-2-6272.jpeg",
                showDelete: false
            }
        ],
        like: 1,
    }
]);

useEffect(() => {
    const storageInforPost = localStorage.getItem("INFOR_POSTS")
    if(storageInforPost){
        setInforPost(JSON.parse(storageInforPost))
    }
}, [])

useEffect(() => {
    localStorage.setItem("INFOR_POSTS", JSON.stringify(inforPost))
}, [inforPost])


  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed inforPost={inforPost} setInforPost={setInforPost}/>
        <Widgets />
      </div>
      
    </div>
  );
}

export default App;
