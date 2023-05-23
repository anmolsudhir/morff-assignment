import React, { useCallback } from 'react'
import { styled } from 'baseui'
import { useState, useEffect } from 'react';
import { Card } from 'baseui/card'
import { LabelMedium, LabelLarge, HeadingLarge, MonoHeadingXXLarge, HeadingXXLarge } from 'baseui/typography'
import axios from 'axios';
import IMAGE from '../assets/images/27 2.svg'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection : 'column',
  height: '100vh',
  width : '100vw',
  position : 'relative',
  backgroundColor : '#fff',
  overflow : "auto",
  margin : '0px',
  padding : '0px',
  boxSizing : "border-box"
});

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection : 'column',
  height: '100%',
  width : '50%',
  position : 'relative',
  backgroundColor : '#fff',
  overflow : "auto",
  margin : '0px',
  padding : '0px',
  boxSizing : "inherit",
  padding : "2% 0"
});

const LoadingComponent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  width: '12rem',
  height: '12rem',
  background: 'linear-gradient(269.53deg, #FFC107 32.52%, rgba(255, 193, 7, 0.62) 86.27%)',
  boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
  borderRadius: '50%',
  padding : '0.5rem',
  boxSizing : "box-border",
  marginTop : "6rem"
})

function Page() {

  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');
  let html = "<p>The strategy in communications is not to sell the 1/4&#8243;-inch drill bit, but the 1/4&#8243;-inch hole.</p>"
  const fetchQuote = useCallback( async () => {
    try {
      //creating the quote from the API
      const quoteObject = await axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/');
      console.log(quoteObject)
      const idx = Math.floor(Math.random() * (quoteObject.data?.length));
      const quoteContent = quoteObject.data[idx].yoast_head_json.og_description;
      const quoteTitle = quoteObject.data[idx].title.rendered
      const finalQuote = quoteContent + " - " + quoteTitle

      // setting quote and displaying it for 5 seconds as loading screen
      setQuote(finalQuote.trim('.'))
      //setTimeout(() => setIsLoading(false), 5000)

    } catch {
      console.error("error")
    }
  }, []
  )

  // fetching a new quote everytime the page is rendered
  useEffect(() => {
    fetchQuote();

    return () => setQuote('')
  }, []);

  return (
    <Container>
      <Content>
      <Card overrides={{Root: {style: {
        position : "absolute",
        display : "flex",
        flexDirection : "column",
        width: '100%',
        height: '10%',
        background: '#000000',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '0.75rem',
        borderWidth : '0',
        padding : '0 1rem',
        boxSizing : "inherit"
      }}}}>
        
        <img style={{
          position: 'absolute',
          height: '100%',
          right: '0',
          top: '0',
          background: 'url(27.png)',
          borderRadius: '0px 18px 0px 0px',
        }} src={IMAGE}></img>
      </Card>
      <div style={{height : "90%", width:"100%", display : "flex", alignItems:"center", justifyContent :"center"}}>
      {
        isLoading ? 
      <LoadingComponent>
        <span style={{
          width: 'auto',
          height: 'auto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '0.75rem',
          textAlign: 'center',
          color: '#333333',
          borderRadius: '2px',
          boxSizing : "inherit"
          }
        }>{
          quote}
        </span>
      </LoadingComponent> : 
         "loaded"
      }
      </div>
      </Content>
    </Container>
  )
}

export default Page