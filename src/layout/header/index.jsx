import React, { Fragment,useState,useEffect,useCallback } from 'react';
import {Row} from 'reactstrap'
// import {X} from 'react-feather'
import {MENUITEMS} from '../sidebar/menu'
import LeftHeader from './leftbar'
import RightHeader from './rightbar'

// import { useSelector } from 'react-redux'

const Header = (props) => {

  // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  // eslint-disable-next-line
  // eslint-disable-next-line
  // const layout_type = useSelector(content => content.Customizer.layout)
  // const layout_version = useSelector(content => content.Customizer.mix_background_layout)
  
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
        document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);




  return (
      <Fragment>
      <div className="page-header">
      <Row className="header-wrapper m-0">
      {/* <Form className="form-inline search-full" action="#" method="get">
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative">
                <input 
                    className="Typeahead-input form-control-plaintext w-100" 
                    id="demo-input" 
                    type="search" 
                    placeholder="Search Cuba .."
                    defaultValue={searchValue}
                    onChange={(e) => handleSearchKeyword(e.target.value)}
                />
                  <div className="spinner-border Typeahead-spinner" role="status">
                    <span className="sr-only">{Loading}</span>
                  </div><X className="close-search" onClick={() => document.querySelector(".search-full").classList.remove("open")}/>
              </div>
                <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                  {searchValue ?
                      searchValue.map((data, index) => {
                          return (
                              <div className="ProfileCard u-cf" key={index}>
                                  <div className="ProfileCard-avatar">
                                      <data.icon />
                                  </div>
                                  <div className="ProfileCard-details">
                                      <div className="ProfileCard-realName">
                                          <Link 
                                              to={data.path} 
                                              className="realname" 
                                              onClick={removeFix}
                                          >
                                              {data.title}
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          )
                      }) : ''
                  }
                </div>
                <div className="Typeahead-menu empty-menu">
                    <div className="tt-dataset tt-dataset-0">
                        <div className="EmptyMessage">
                            {"Opps!! There are no result found."}
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </Form> 
    */}
      <LeftHeader/>
      <RightHeader/>
      </Row>
    </div>
    </Fragment>
  );
}

export default Header;