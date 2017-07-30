package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Duck represents a small cute duck. Quack-quack
type Duck struct {
	ID int `json:"id"`
}

func main() {
	http.HandleFunc("/ducks", getDucks)
	http.ListenAndServe(":9696", nil)
}

func getDucks(w http.ResponseWriter, r *http.Request) {
	ducksJSON, _ := json.Marshal([]Duck{{0}, {1}, {2}})
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintf(w, string(ducksJSON))
}
