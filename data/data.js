function GetDataFromLocalJS() { return {
    "width": 640,
    "height": 480,
    "x": 100,
    "y": 30,
    "color": {
      "background": "black",
      "wall": "#332B99",
      "food": "Yellow"
    },
    "cell": {
      "halfWidth": 8,
      "halfHeight": 7
    },
    "map": [
      [ 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9 ],         
      [ 4,-5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-5, 8 ],         
      [ 4, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 3, 0, 1, 2, 2, 3, 0, 8 ],         
      [ 4, 0, 7, 6, 6, 5, 0, 7, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 5, 0, 7, 6, 6, 5, 0, 8 ],         
      [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 ],         
      [ 4, 0, 1, 2, 2, 3, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 1, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 5, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 7, 6, 6, 5, 0, 8 ],         
      [ 4, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 8 ],         
      [ 4, 2, 2, 2, 2, 3, 0, 8, 4, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 8, 4, 0, 1, 2, 2, 2, 2, 8 ],         
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],          
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         
      [ 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6 ],         
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],         
      [ 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2 ],         
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],
      [ 4, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 8 ],
      [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 ],
      [ 4, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 3, 0, 1, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 5, 0, 7, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 5, 0, 7, 6, 6, 5, 0, 8 ],
      [ 4, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 8 ],
      [ 4, 2, 3, 0, 8, 4, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 8, 4, 0, 1, 2, 8 ],
      [ 4, 6, 5, 0, 7, 5, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 7, 5, 0, 7, 6, 8 ],
      [ 4, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 8 ],
      [ 4, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 0, 8 ],
      [ 4,-5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-5, 8 ],
      [ 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9 ]
    ],
    "keys": [
      [1, 0, 0, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 2, 1, 1, 1, 2, 1, 1, 0],
      [1, 1, 1, 2, 1, 1, 1, 2, 0]
    ],
    "pacman": {
      "x": 13,
      "y": 28,
      "size": 10,
      "color": "Yellow"
    },
    "leftSidebar": {
      "x": 35,
      "y": 30,
      "leading": 16,
      "textBottomMargin": 35,
      "text": "GAME SCORE",
      "value": 0,
      "length": 5,
      "size": 15,
      "color": {
        "text": "pink",
        "value": "white",
        "background": "black"
      },
      "font": "Arial",
      "fontSize": "16px",
      "points": {
        "ghost": 100,
        "cherry": 500,
        "smallFood": 1,
        "bigFood": 10
      },
      "lives": {
        "x": 35,
        "y": 340,
        "count": 3,
        "leading": 40,
        "size": 15,
        "color": "yellow"
      }
    },
    "rightSidebar": {
      "x": 605,
      "y": 30,
      "leading": 16,
      "textBottomMargin": 35,
      "text": "HIGH SCORE",
      "value": 1000,
      "length": 5,
      "size": 15,
      "color": {
        "text": "pink",
        "value": "white",
        "background": "black"
      },
      "font": "Arial",
      "fontSize": "16px"
    }
  }
}