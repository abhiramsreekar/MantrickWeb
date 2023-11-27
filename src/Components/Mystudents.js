import React from 'react'
import './mystudents.css'
export default function Mystudents() {
  return (
    <div className='outerStudent'>
        <div class="studiowrapper">
      <h1 className='text-blk heading '>My Students Are Working In</h1>
      <div class="cols">
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAM3fOopXCZJXaNOyBXBnISIDLnC1huI8VYw&usqp=CAU)`}}>
                            {/* <div class="inner">
                                <p>Diligord</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(data:image/png;base64,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)`}}>
                            {/* <div class="inner">
                                <p>Rocogged</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////09PROTk7Pz8/s7OyRkZH8/Pzn5+d7e3v5+fl0dHS5ubmfn5/i4uJkZGQ4ODgtLS3CwsKpqakyMjJvb2+AgICysrLV1dVgYGDS0tLIyMgjIyPc3NwICAhxcXFISEhXV1c+Pj6ZmZkVFRVJSUmJiYkeHh5SUlInJyekpKTAb3rLAAAFiUlEQVR4nO2b63aqOhRGDRURUNBaFGVTb221vv8DnmTlQqxaaC0jB8c3f7WAcc2QCyaLXg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgD3k7Pl1jM3Ud2J8Rslt45WnrOrq/IL5pSJaLnesA7+Z7Q07x4jrEO6k1ZOzkOsb7aGDIhp2+jU0MGVu6DvMOmhmyzHWcv6ehIUtdB/pr1g0Ng+5PG195GqzOFH3XAbXBdGErLlyH0wqbxFJ8vHZKFJXhynUsLWEpvruOpSWqhjpyHUpLTIxh5DqUtpg9wLT/Pf+M4cx1KHdRDm2SkTU3mMGmdBfeH+B9fU4LzakPfchzGN/9XBhWM/yTOfTPZYT3cmloJoeqI3b6p/ClYaJPvQYXt7WLXBrm+lRlOHEZ4b1cGg70qWrO7/Q68YXh0Jxa6kPBm8MA7yb4IriqbE76WLd/BWfhGfaoOdSGhbPo2sU00qpnPhilMdy4DqUd5lfGnodid2X6eCgmUWXoOpZWWFqCY9fBtEH18/4h1zBeTmdPAV3dnNntB1c5FV8e4zq70HY7U+Gc7i5gNNxdG766DvTXNDPssGAzw7y+nP8vTQz3roO8i3rDvNOLM/WGeVenQcO3hsPZxnV897PN+1cpRvt1p1dlAAAAAAAAAACArnNcx9vWfpxP0zBcH9sq3cIspHh9mV/nqySCUCX0erNXdeGp1zt/q0BuIfUZC3RqXnwtm8uk6QfJ6VMdG+utjHyrC/FMhs0uYuxZ/5Pyf0pdzzPaeTwGLNLvM45qcwDtTRNarU1k4c9CjiNEaA0wEJt+/TNDyhjZ059qITu7lglk76upzNlElS62FEXt0O5wX3+A6lbXBQWos1HHLCCr6rWURW3eisdmnxPO+zyRBUnDMWPFRpyfDlSmJBlOxaWffZYcxB8vsoAyNSu9Nww9+twu5XczUM4jmfWVeeQiUxZV0DJhQ7WFOa+Cvskvqgy1WBNDsx+bULOThlFVo7HvZdpQUlSZeCKCtJfrPc9bhtbVH+elv9OGMDfMEr3rVrA8NIY+G6prbMPhRr/R8CPDD8oBIcPlZSL2DUMRQS+VgdcbcjeusWUsNkcSESo3TEPV1ieMLY1hRq14pWtQG/qix89+bJjSy4Fk+KG+YUYs4puGsexHpZKoNfTF3VszVg2ihQhR3EMeyknHPNeGCQksdfJGZShaevwLw1QZDlSkanhY3DSUEWjRJoYr2kq1DT1lOJZ3SrQHbajVdA1ahmJc3/zQMDu7hzQSjDiL4LbhUjfPRB5qdg/5VdXL633RzMnwjQrbi6u1Ya4+mqoatA156P7rzwwHNJqR4dHuKf5tQxnBqsx92XHrDF+ptvjIMTdnh6ofZjSC9GRbVYZPNMRkSZmrLKozw52Y335k6FMkciz1rMEkuml4pGliXs2m62sZ6pbhWNacVXpK7VAaTnkj4u39YAwLmuB9WX721VB822LUwHC0TDnhzJNtXhryZpqEk8NhupxFcra7ZljQF6ZhHK8X1Ld4q51RcWlavdHMDelYNsjVNMZbS55+vr0dJnv+ePKqDXmLLYc0Z0jDHY2XB158zOfN8sJQZqvWGVqJSnI+Us80MtVVZsHQdH7FcGe/+hKIp71DVVjV9+xnGl/O6s9UOJUeiC6pDLd63peGI7qfkgH13dO5Ib2gUpcE6HsSv1zI8S2P5MT79Cwf6JKxfH7yIrNDPYrkbvwiiqoH83EU8cEpLVV5XmKd0YcK0/1ilYfpjaj09yii+fejLOmSMIpeegcvsl429SNe8/vIp+81hT97XjVg/IJ/0xb3/Q7T6Wf9VQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN+A8/t0O6DXAxeAAAAABJRU5ErkJggg==)`}}>
                            {/* <div class="inner">
                                <p>Strizzes</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPj4eICMCxE2OK2gMdMaLehY-p_MNsh_buw&usqp=CAU`}}>
                            {/* <div class="inner">
                                <p>Clossyo</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///+VlZXy8vI8PDyMjIzb29tCQkKIiIhpaWl0dHT4+PhZWVnx8fH7+/vBwcEpKSm7u7vLy8vq6uqenp6AgIDe3t7k5OStra0/Pz+lpaVPT0/JyckvLy9hYWEyMjINDQ0bGxsiIiJubm60tLQXFxdSUlLT09OJiYl4eHhJSUmpa6w2AAAGLUlEQVR4nO2b62KqOhCFHaloRbCKFdRisdrtlvd/wEO4ToDEuovYctb3pzVBkmUmk5kQBgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD43WxWQx2hdPFUe+3rYxRcxSUdW37pRnsp/VSFUdw31zaasC2iiF1qEjVfaNgG0fxhEq6xItqr6mxyyw9DoqnqwjUZ7faqVdZkhYqqI5Gf/z8mWqpusSV6brtbLbLTWNicaJb9uybnRXFV9JNtVBCPwFFVZ5GX/jPUuBKPrM/2u9UmHhmqHj4TrcTfJ6I31ddXml/oh7DRWNmCaDwQftRS2Wg8QRf36VeLaEbhYAs7HWlsdE324U79apF4JqmqprGdvjhqP7rSLCI/iJnWnzprItUw6RaRH8VWMxKWLiTzyLlPj1rHVc+m2E7Pqq/FNnq5U4/aJtJ4xCU9KWp0i0g7XEY5w/dq3eeo5CP+/DEc1Zgci7776sgr0PhR5SLSEl6ZvKyrdT7LbIQOVfJjbtNOurdHz8P726jJejqRq/5wFULhkzq1W+7SL9y4co/vbqOyQutDWXVNYZrqbuU86rCJnuRbNrTeuqKGNkqkEZhIAq4qTJZDl9ww/35kGg45hmv6rxtF4x3YaEVhkegI5P5fVyh+n9hOT/n3z6zK9ncNbQedrPWyQpaQv92sUMzj0p/GcZp863o84N3dj9YV0jAv31d6/xWFdpis+2Fyg0utuqpGlzDeTyEFWXl1B+0rCkWH97mdzlm5Y5pWmkMxuopHqwqz6GpV7XxFofm2FLzJXxc9PmWzmRXP3webusL4q3pHeyeFafhcH62KwnJR4C43caSxnYrywtGYsZMJDKoq1CWM91WYTKNztbSqkIVnPDAQgd8st9PpXOQUSRwhBMoK3zvLmWoKxe7ftFaoUchnXBKj+mUedVzE89ny09BwLLdrBYNOqCukXZLPfV3ha0WhGDHXz5fW/Sl3WlzhpBYjdqnw7NfLdAov8lWJncYYp1xktHUrCgNNwtiBwkY0CtkPElRKFscwkzT0uMIzOZ34UcH3Fb6UNp2HRGE8Zgs7KXLeLtlKz3LgUXc2yhWe6rLYqqhcLcYsNigyoWeRa+Qz0Dr/lZPrd4fMzgQyhZdtVeD2WanQ/5um+FtpXSlDz0W67u8yN+qsh2wIz+my0rnCSbpqlbh81fhK1OaVt/0sTPZ9lW0juKOsbs+eR3WscCZ3eHarQpb9ijWykHEYmUmi4WXO9XFjKG3MiMDkNoWr8q7T7CdK2B7FVtRSOKRTKAoeNQ8nqQ/MMQY3KmSWd0j9qLDToX1O7zV4Oc4NspKp+iBfKto8yiZ3i0Le5UU5qok7tk+ZAe8XtAwHj1oPJ7xv6ZbN1xUueIdLF/wnn9tvQR4NbITCx8Q06SBky7f9eZNCT7qnxcvJFfnV61zOlR4Sl6YtZqKm/EODQs80TbaZzL1MaQck1v21I9rYzcstqqzd7nOL7DdNcqEsOFErTKK2NZNS7qXFNspCwWi2jF20NXP4LtfgMflhpvAQ21h+bOCKQm61hZ2G4pFvuVEndLnkR4NBxbV0tA/VoFCke/k27RWFopcF+WKRPLZn0fg2OTQl7cQWLXe8T1PM/GXh5q4plOw01fCc7u+zrDj68F6Hs/pRje732gqFQbGxeVXhmClMnzsZmb0uuf1GRtNjt873Sxu891WFkp0KZ7nIx/JQlsdjGoZNbXe95/1PCqUMeipsNJ+PzE7/KNoOOni29n2F/KmpHfCjiJKdNtPxs6d/UyjZqcF9Js+XNa23qkbRxvcU8ufkspbxrEDVehfPgEt/P6pXVvYJmUWyI1583Xfr99DTgZ0+jXMalt9DUTkO449hVHzkJ2eCtOhl2bSuZ5c88CxGe+i2Xx55nqY9bLWNTjXhy+85E+WrbTTZxPv159p0NtqPs4nZc9Em+nG+VGOj/TgjPNPYaD/OeWv8aD/O6p80frQX71vsqbKRxujFOzOh5lxpP9578uVX8CR68e6a2Le3e/3+YcPRFEYP3iGN+v8eMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H/Df/x5TUl/m1+zAAAAAElFTkSuQmCC)`}}>
                            {/* <div class="inner">
                                <p>Rendann</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(data:image/png;base64,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)`}}>
                            {/* <div class="inner">
                                <p>Reflupper</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(https://unsplash.it/506/506/)`}}>
                            {/* <div class="inner">
                                <p>Acirassi</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div class="front" style={{backgroundImage: `url(https://unsplash.it/500/500/)`}}>
                            {/* <div class="inner">
                                <p>Sohanidd</p>
                  <span>Lorem ipsum</span>
                            </div> */}
                        </div>
                        <div class="back">
                            {/* <div class="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
     </div>
    </div>
      )
}
