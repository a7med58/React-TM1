import React from 'react'
import { DivOne, DivTow, P, Span, WatchVideoWrapper } from './Style'

export default function WatchVideo() {
  return (
    <div className="container">
        
        <WatchVideoWrapper>
          <DivOne>
            <Span>Watch Video </Span>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cupiditate illo exercitationem dicta omnis provident velit, non necessitatibus eaque laboriosam obcaecati tempora quaerat molestiae animi possimus quibusdam eos ea natus?</P>
          </DivOne>
          <DivTow> 
            <iframe width ="100%" height="200px" src ="https://www.youtube.com/watch?v=wUDRnt59cqg" frameborder = "0" title="Video" />
          </DivTow>  
        </WatchVideoWrapper>
    </div>
  )
}
