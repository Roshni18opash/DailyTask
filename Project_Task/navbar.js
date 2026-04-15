// Navbar.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand text-light" href="/">
          Polling App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" href="/createpoll">
                Create New Poll
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="/addpoll">
                Add Poll
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
//page/addpoll.js
// pages/addpoll.js

'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/app/components/Navbar';

const AddPoll = () => {
    const [poll, setPoll] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [userId, setUserId] = useState('');
    const [hasVoted, setHasVoted] = useState(false);
    const [totalVotes, setTotalVotes] = useState(0);

    useEffect(() => {
        const storedPoll = localStorage.getItem('poll');
        if (storedPoll) {
            const pollData = JSON.parse(storedPoll);
            setPoll(pollData);
            setTotalVotes(pollData.votes.reduce((acc, curr) => acc + curr, 0));
            // Total votes
        }
    }, []);

    const calculatePercentage = (votes) => {
        if (totalVotes === 0) return '0%';
        return ((votes / totalVotes) * 100).toFixed(2) + '%';
    };

    // Handle voting submission
    const handleVote = () => {
        if (!userId || !selectedOption) {
            alert('Please provide your ID and select an option.');
            return;
        }

        const votedUsers = JSON.parse(localStorage.getItem('votedUsers') || '[]');
        if (votedUsers.includes(userId)) {
            alert('You have already voted!');
            return;
        }

        // Update poll with new vote
        const updatedPoll = { ...poll };
        const optionIndex = updatedPoll.options.indexOf(selectedOption);
        if (optionIndex !== -1) {
            updatedPoll.votes[optionIndex] += 1;
            setPoll(updatedPoll);
            localStorage.setItem('poll', JSON.stringify(updatedPoll));

            votedUsers.push(userId);
            localStorage.setItem('votedUsers', JSON.stringify(votedUsers));

            setTotalVotes(totalVotes + 1);
            setHasVoted(true);
            setUserId('');
            setSelectedOption('');
            alert('Vote submitted successfully!');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                {!poll ? (
                    <div className="text-center">
                        <h2>No poll available</h2>
                    </div>
                ) : (
                    <>
                        <h2 className="text-center mb-4">{poll.question}</h2>

                        <div className="d-flex flex-column 
                        align-items-center">
                            <div className="w-90"> {/* This is to set the width to 70% */}
                                <div className="btn-group-vertical
                                 w-100"> {/* Set full width inside 70% */}
                                    {poll.options.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`btn 
                                                btn-outline-primary
                                                 mb-2 ${selectedOption === option ? 'active' : ''}`}
                                            onClick={() => setSelectedOption(option)}
                                        >
                                            {option} - {calculatePercentage(poll.votes[index])} ({poll.votes[index]} votes)
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group mt-3 w-90">
                                <label htmlFor="userId" className="form-label">Your ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userId"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </div>

                            <div className="w-70">
                                <button className="btn btn-primary mt-3
                                 w-100" onClick={handleVote} disabled={hasVoted && !userId}>
                                    {hasVoted ? 'Vote Again' : 'Submit Vote'}
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default AddPoll;





//page/createpolljs
// pages/createpoll.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/app/components/Navbar';

const CreatePoll = () => {
    const [pollQuestion, setPollQuestion] = useState('');
    const [options, setOptions] = useState(['']);

    // Handle adding a new option
    const addOption = () => {
        setOptions([...options, '']);
    };

    // Handle updating the value of an option
    const handleOptionChange = (index, value) => {
        const updatedOptions = options.map((option, i) =>
            i === index ? value : option
        );
        setOptions(updatedOptions);
    };

    // Handle poll creation
    const createPoll = () => {
        if (pollQuestion && options.every((opt) => opt.trim() !== '')) {
            // Create the new poll object
            const poll = { question: pollQuestion, options, votes: Array(options.length).fill(0) };

            // Clear relevant data from localStorage before setting the new poll
            // Remove previously stored voted user IDs
            localStorage.removeItem('votedUsers'); 
             // Remove the old poll
            localStorage.removeItem('poll');

            // Save the new poll in localStorage
            localStorage.setItem('poll', JSON.stringify(poll));

            // Display success alert and reset form
            alert('Poll created successfully!');
            setPollQuestion('');
            setOptions(['']);
        } else {
            alert('Please fill out the question and all options');
        }
    };

    return (
        <><Navbar />
            <div className="container mt-5">
                <h2>Create a Poll</h2>
                <div className="form-group mb-3">
                    <label htmlFor="pollQuestion" 
                           className="form-label">Poll Question</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pollQuestion"
                        value={pollQuestion}
                        onChange={(e) => setPollQuestion(e.target.value)}
                    />
                </div>
                <div>
                    {options.map((option, index) => (
                        <div className="form-group mb-2" key={index}>
                            <label className="form-label">Option {index + 1}</label>
                            <input
                                type="text"
                                className="form-control"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                <button className="btn btn-secondary mb-3" 
                        onClick={addOption}>Add Option</button>
                <button className="btn btn-primary"
                        onClick={createPoll}>Create Poll</button>
            </div>
        </>
    );
};

export default CreatePoll;
pagejs
// page.js

import React from 'react'
import AddPoll from '@/pages/addpoll';

const page = () => {
    return (
        <div>
            <AddPoll />
        </div>
    )
}

export default page;


//new
  
module.exports = {

  createPoll

};
 
exports.createPoll = async (req, res) => { ... };

exports.vote = async (req, res) => { ... };

exports.getPoll = async (req, res) => { ... };
 