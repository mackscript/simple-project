import  React from 'react';
import ReactDom from 'react-dom';
// css 
import './index.css';
// data 
import {books} from './data';
import Book from './book';


function BookList(){
          return (      
                <> 
                 <h2 className="header-title">MacksBooks</h2>
                 <div className='booklist'>  
                          {books.map((book) =>{
                                  {/* const {img, title,author}= book; */}
                                return <Book key={book.id} {...book}>
                                </Book> 
                              })};
                         </div>
                  </>
          );
};


ReactDom.render(<BookList/> , document.getElementById('root'));
