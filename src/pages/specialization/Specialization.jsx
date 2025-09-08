import React from 'react'
import './specialization.scss'
import { FaRobot, FaBrain, FaDatabase, FaBolt } from "react-icons/fa";
import { RiLinksLine, RiComputerLine } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";


const Specialization = () => {
  return (
    <>
    <div className="specialize">
        <div className="shead">
            <h1><span><FaRocket /></span>Advanced Specialization</h1>
        </div>
        <div className="specialization-grid  anime">
  <div className="card"><span><FaRobot /></span> Agentic AI Systems</div>
  <div className="card"><span><RiLinksLine /> </span>Model Context Protocol</div>
  <div className="card"><span><FaBrain /></span> Generative AI Applications</div>
  <div className="card"><span><RiComputerLine /></span> RAG Implementation</div>
  <div className="card"><span><FaDatabase /></span> Vector Database Mastery</div>
  <div className="card"><span><FaBolt /></span> Production Deployment</div>
</div>

    </div>
    </>
  )
}

export default Specialization
