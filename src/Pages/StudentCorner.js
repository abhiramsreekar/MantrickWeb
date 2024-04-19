import React, { useEffect } from 'react'
import './StudentCorner.css';
export default function StudentCorner() {
    const expand=(e)=>{
        var portfolioId = e.target.parentElement.parentElement.dataset.portfolio;
                var portfolio = document.getElementById(portfolioId);
                if (portfolio.style.display === 'none') {
                    portfolio.style.display = 'table-row';
                } else {
                    portfolio.style.display = 'none';
                }
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    
    <div>
      <div className="containerCorner">
        <h1 class="text-blk heading" style={{textAlign:"center"}}>Student Corner</h1>
        <div className="search-bar">
            <input type="text" placeholder="Search..."/>
            <i className="material-icons search-icon">search</i>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Date Joined</th>
                    <th>Portfolio</th>
                </tr>
            </thead>
            <tbody>
                <tr className="student-details" data-portfolio="portfolio-1">
                    <td>Pavan Reddy</td>
                    <td>VFX Masterclass</td>
                    <td>4 months</td>
                    <td>January 1, 2024</td>
                    <td><i className="material-icons expand-icon" onClick={expand}>arrow_drop_down</i></td>
                </tr>
                <tr className="portfolio" id="portfolio-1">
                    <td colspan="5">
                        <div className="portfolio-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            
                        </div>
                    </td>
                </tr>

                <tr className="student-details" data-portfolio="portfolio-2">
                    <td>Raj</td>
                    <td>Animation</td>
                    <td>3 months</td>
                    <td>January 10, 2024</td>
                    <td><i className="material-icons expand-icon" onClick={expand}>arrow_drop_down</i></td>
                </tr>
                <tr className="portfolio" id="portfolio-2">
                    <td colspan="5">
                        <div className="portfolio-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </td>
                </tr>
                <tr className="student-details" data-portfolio="portfolio-3">
                    <td>Abhinay</td>
                    <td>VFX</td>
                    <td>9 months</td>
                    <td>January 1, 2024</td>
                    <td><i className="material-icons expand-icon" onClick={expand}>arrow_drop_down</i></td>
                </tr>
                <tr className="portfolio" id="portfolio-3">
                    <td colspan="5">
                        <div className="portfolio-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </td>
                </tr>
                <tr className="student-details" data-portfolio="portfolio-4">
                    <td>Rahul</td>
                    <td>VFX Masterclass</td>
                    <td>6 months</td>
                    <td>January 1, 2024</td>
                    <td><i className="material-icons expand-icon" onClick={expand}>arrow_drop_down</i></td>
                </tr>
                <tr className="portfolio" id="portfolio-4">
                    <td colspan="5">
                        <div className="portfolio-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YOdqs8FnYYU?si=xDaj_F-OHhuYSL1H&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    </div>
  )
}
