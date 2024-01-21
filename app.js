const express = require("express");
const axios = require("axios")
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(express.static("public"));


app.get("/", function(req,res){
  let date =  new Date().getFullYear();
  console.log(date);
    res.sendFile(__dirname + "/index.ejs");
    res.render('index.ejs',{date});
  });

  


  // app.get("/business", async (req,res)=>{
  //   try{


  //     const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=54da2c60dc594889bbb916897155de2a");
  //     const result = response.data;
  //     console.log(result);
  //   }
  //   catch(error){
  //     console.error("Failed to make request", error.message);
  //       }
  // });
  // app.get("/entertainment", async (req,res)=>{
  //   try{


  //     const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=54da2c60dc594889bbb916897155de2a");
  //     const result = response.data;
  //     console.log(result);
  //   }
  //   catch(error){
  //     console.error("Failed to make request", error.message);
  //       }
  // });

  app.get("/business", async (req,res)=>{
    try{
      const name="Business";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });

  app.get("/sports", async (req,res)=>{
    try{
      const name="Sports";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });

  app.get("/entertainment", async (req,res)=>{
    try{
      const name="Entertainment";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });

  app.get("/health", async (req,res)=>{
    try{
      const name="Health";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });

  app.get("/science", async (req,res)=>{
    try{
      const name="Science";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });

  app.get("/tech", async (req,res)=>{
    try{
      const name="Tech";
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=54da2c60dc594889bbb916897155de2a");
      const length=response.data.articles.length;
      var titleNews= new Array();
      var descriptionNews= new Array();
      var authorNews= new Array();
      var imageNews= new Array();
      var moreNews= new Array();
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        titleNews.push(response.data.articles[i].title);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        imageNews.push(response.data.articles[i].urlToImage);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].description)
        descriptionNews.push(response.data.articles[i].description);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        authorNews.push(response.data.articles[i].author);
      }
      for(var i=0;i<length;i=i+1){
        // console.log(response.data.articles[i].title)
        moreNews.push(response.data.articles[i].url);
      }
      
      // const title_news = response.data.articles[0].title;
      // console.log(result);
      res.render('result.ejs',{name,titleNews,descriptionNews,authorNews,imageNews,length,moreNews});
     
    }
    catch(error){
      console.error("Failed to make request", error.message);
        }
  });












app.listen(3000, ()=>{
console.log("Server running on port 3000");
});
