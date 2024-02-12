```c++
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Graph {
public:
    Graph(int num_vertices) {
        this->num_vertices = num_vertices;
        this->adj_list = new vector<pair<int, int>>[num_vertices];
    }

    void add_edge(int u, int v, int weight) {
        this->adj_list[u].push_back({v, weight});
    }

    vector<int> dijkstra(int start) {
        vector<int> distance(this->num_vertices, INT_MAX);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        distance[start] = 0;
        pq.push({0, start});

        while (!pq.empty()) {
            pair<int, int> top = pq.top();
            pq.pop();

            int u = top.second;
            int dist = top.first;

            if (dist > distance[u]) {
                continue;
            }

            for (auto edge : this->adj_list[u]) {
                int v = edge.first;
                int weight = edge.second;

                if (distance[v] > dist + weight) {
                    distance[v] = dist + weight;
                    pq.push({distance[v], v});
                }
            }
        }

        return distance;
    }

private:
    int num_vertices;
    vector<pair<int, int>>* adj_list;
};

int main() {
    Graph graph(9);

    graph.add_edge(0, 1, 4);
    graph.add_edge(0, 6, 7);
    graph.add_edge(1, 2, 9);
    graph.add_edge(1, 6, 14);
    graph.add_edge(2, 3, 2);
    graph.add_edge(2, 5, 1);
    graph.add_edge(3, 4, 6);
    graph.add_edge(4, 5, 2);
    graph.add_edge(5, 6, 2);
    graph.add_edge(5, 8, 4);
    graph.add_edge(6, 7, 1);
    graph.add_edge(6, 8, 10);
    graph.add_edge(7, 8, 7);

    vector<int> distances = graph.dijkstra(0);

    for (int i = 0; i < distances.size(); i++) {
        cout << "Distance from 0 to " << i << ": " << distances[i] << endl;
    }

    return 0;
}
```