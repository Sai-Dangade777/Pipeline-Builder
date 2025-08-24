from fastapi import FastAPI, Body
from typing import List, Dict
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Pipeline Builder API")

# Configure CORS
FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")
ALLOWED_ORIGINS = [
    FRONTEND_URL,
    "https://pipeline-builder-frontend.onrender.com",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    """Check if the graph is a Directed Acyclic Graph (DAG)."""
    # Create adjacency list
    adj = defaultdict(list)
    for edge in edges:
        adj[edge['source']].append(edge['target'])
    
    # Keep track of visited nodes and nodes in current recursion stack
    visited = set()
    rec_stack = set()
    
    def has_cycle(node: str) -> bool:
        """DFS to detect cycles."""
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in adj[node]:
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
                
        rec_stack.remove(node)
        return False
    
    # Check for cycles starting from each unvisited node
    for node in [n['id'] for n in nodes]:
        if node not in visited:
            if has_cycle(node):
                return False
    
    return True

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(
    data: Dict = Body(...)
):
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag(nodes, edges)
    }


