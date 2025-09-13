# VectorShift Pipeline Builder

A visual pipeline builder application that allows users to create, connect, and analyze data processing pipelines. Built with React and FastAPI.

## Features

### 1. Node System
- **Base Node Abstraction**: Reusable component architecture
- **Node Types**:
  - Input Node: Entry point for data
  - LLM Node: Language Model processing
  - Text Node: Text manipulation with variable support
  - Output Node: Pipeline output
  - Additional Nodes: Math, Image, Date, Boolean, and Custom nodes

### 2. Dynamic Text Node
- Auto-resizing based on content
- Variable detection using {{variable}} syntax
- Dynamic handle creation for variables
- Real-time updates

### 3. Pipeline Analysis
- Node and edge counting
- DAG (Directed Acyclic Graph) validation
- Backend integration for pipeline validation

### 4. Modern UI
- Drag-and-drop interface
- Interactive connections
- Modern card-like design
- Consistent styling across components

## Tech Stack

### Frontend
- React
- ReactFlow for node-based interface
- Zustand for state management
- Modern CSS styling

### Backend
- Python
- FastAPI
- CORS support
- Graph analysis algorithms

## Getting Started

### Prerequisites
- Node.js (for frontend)
- Python 3.x (for backend)
- npm or yarn
- pip (Python package manager)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/vectorshift-pipeline.git
cd vectorshift-pipeline
```

2. **Backend Setup**
```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```
The backend will run on http://localhost:8000

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```
The frontend will run on http://localhost:3000

## Usage

1. **Creating a Pipeline**
   - Drag nodes from the toolbar onto the canvas
   - Connect nodes using handles (dots on sides)
   - Configure node settings as needed

2. **Node Types and Connections**
   - Input Node: Starting point (right handle output)
   - Text Node: Variable processing (left handle input, right handle output)
   - LLM Node: Language model processing (two left handles for system/prompt, right handle output)
   - Output Node: End point (left handle input)

3. **Example Pipeline**
   ```
   Input → Text → LLM → Output
   ```
   - Input provides initial data
   - Text formats with variables
   - LLM processes the input
   - Output stores results

4. **Analyzing Pipelines**
   - Click "Submit Pipeline" to analyze
   - View node count, edge count, and DAG validation
   - Clear pipeline to start new

## License

This project is licensed under the MIT License - see the LICENSE file for details.
