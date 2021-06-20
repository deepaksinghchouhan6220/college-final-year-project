import React from 'react'
import "./contact.css"

export default function contact() {
    return (
        

            <div class="container">
                <center><h1>Contact Page</h1></center>

                <form>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
</div>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<center><input class="btn btn-primary" type="submit" value="Submit"></input></center>
                </form>



                <div class="card card-self">
  <div class="card-header">
    <h2><b>Company information</b></h2>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p >E-Mail Address:- s@gmail.com</p> <p>Phone NO:- 99999999999</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>

            </div>



            
            
    
    )
}
