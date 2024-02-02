import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network';
import { DataSet, DataSetOptions } from 'vis-data';
import { param } from 'jquery';

const VisNetwork = () => {
    // function draw() {
    //     // create people.
    //     // value corresponds with the age of the person
    //     let nodes = [
    //       { id: 1, value: 2, label: "Algie" },
    //       { id: 2, value: 31, label: "Alston" },
    //       { id: 3, value: 12, label: "Barney" },
    //       { id: 4, value: 16, label: "Coley" },
    //       { id: 5, value: 17, label: "Grant" },
    //       { id: 6, value: 15, label: "Langdon" },
    //       { id: 7, value: 6, label: "Lee" },
    //       { id: 8, value: 5, label: "Merlin" },
    //       { id: 9, value: 30, label: "Mick" },
    //       { id: 10, value: 18, label: "Tod" },
    //     ];

    //     // create connections between people
    //     // value corresponds with the amount of contact between two people
    //     // let edges = [
    //     //   { from: 2, to: 8, value: 3, title:"BLALALALAL" },
    //     //   { from: 2, to: 9, value: 5, title:"BLALALALAL" },
    //     //   { from: 2, to: 10, value: 1 , title:"BLALALALAL"},
    //     //   { from: 4, to: 6, value: 8, title:"BLALALALAL" },
    //     //   { from: 5, to: 7, value: 2, title:"BLALALALAL" },
    //     //   { from: 4, to: 5, value: 1, title:"BLALALALAL" },
    //     //   { from: 9, to: 10, value: 2, title:"BLALALALAL" },
    //     //   { from: 2, to: 3, value: 6, title:"BLALALALAL" },
    //     //   { from: 3, to: 9, value: 4, title:"BLALALALAL" },
    //     //   { from: 5, to: 3, value: 1, title:"BLALALALAL" },
    //     //   { from: 2, to: 7, value: 4, title:"BLALALALAL" },
    //     // ];

    //     let edges = [
    //         { from: 2, to: 8, value: 3, title: "3 emails per week" },
    //         { from: 2, to: 9, value: 5, title: "5 emails per week" },
    //         { from: 2, to: 10, value: 1, title: "1 emails per week" },
    //         { from: 4, to: 6, value: 8, title: "8 emails per week" },
    //         { from: 5, to: 7, value: 2, title: "2 emails per week" },
    //         { from: 4, to: 5, value: 1, title: "1 emails per week" },
    //         { from: 9, to: 10, value: 2, title: "2 emails per week" },
    //         { from: 2, to: 3, value: 6, title: "6 emails per week" },
    //         { from: 3, to: 9, value: 4, title: "4 emails per week" },
    //         { from: 5, to: 3, value: 1, title: "1 emails per week" },
    //         { from: 2, to: 7, value: 4, title: "4 emails per week" },
    //       ];

    //     // Instantiate our network object.
    //     var container = document.getElementById("mynetwork");
    //     var data = {
    //       nodes: nodes,
    //       edges: edges,
    //     };
    //     var options = {
    //       nodes: {
    //         shape: "dot",
    //         scaling: {
    //           customScalingFunction: function (min, max, total, value) {
    //             return value / total;
    //           },
    //           min: 5,
    //           max: 150,
    //         },
    //       },
    //     };
    //     let network = new Network(container, data, options);
    //   }
    const netRef = useRef()

    function htmlTitle(html) {
        const container = document.createElement("div");
        container.innerHTML = html;
        return container;
    }

    function preTitle(text) {
        const container = document.createElement("pre");
        container.innerHTML = text;
        return container;
      }
      
    function draw(i) {
        const options = {
            fieldId: "id",
            queue: false
        };
        // var data = new DataSet(options);
        // create people.
        // value corresponds with the age of the person
        let nodes = new DataSet([
            {
                id: 1, value: 2, label: "Algie", title: preTitle(`<pre><code>host {
                    id = "host1"
                    port { id = "p1" }
                }</code></pre>`), color: '#e04141', border:"green"
            },
            { id: 2, value: 31, label: "Alston", title: "2 emails per week" },
            { id: 3, value: 12, label: "Barney", title: "3 emails per week" },
            { id: 4, value: 16, label: "Coley", title: "4 emails per week" },
            { id: 5, value: 17, label: "Grant", title: "5 emails per week" },
            { id: 6, value: 15, label: "Langdon", title: "6 emails per week" },
            { id: 7, value: 6, label: "Lee", title: "7 emails per week" },
            { id: 8, value: 5, label: "Merlin", title: "8 emails per week" },
            { id: 9, value: 30, label: "Mick", title: "9 emails per week" },
            { id: 10, value: 18, label: "Tod", title: "10 emails per week" },
        ], options)

      
        // create connections between people
        // value corresponds with the amount of contact between two people
        let edges = [
            {
                from: 1, to: 2, value: 3,title: preTitle("<table class='table'><thead><tr><th>Id</th><th>Numero</th><th>Type</th></tr></thead><tbody> <tr> <td>1</td> <td>11190087654</td> <td>Virement</td></tr>  </tbody> </table>")
            },
            { from: 3, to: 1, value: 5, title: "2 emails per week", color: '#e04141'},
            { from: 1, to: 4, value: 1, title: "8 emails per week", color: '#e04141'},
            { from: 1, to: 5, value: 1, title: "2 emails per week" },
            { from: 1, to: 6, value: 8, title: "4 emails per week", color: '#FF0' },
            { from: 1, to: 8, value: 2, title: "6 emails per week", color: '#26e842' },
            { from: 1, to: 9, value: 2, title: "5 emails per week" },
            { from: 1, to: 10, value: 1, title: "4 emails per week" },
            { from: 10, to: 1, value: 2, title: "9 emails per week" },
            { from: 10, to: 1, value: 2, title: "9 emails per week" },
            { from: 10, to: 1, value: 2, title: "9 emails per week" },
            { from: 4, to: 4, value: 6, title: "2 emails per week" },
            { from: 1, to: 7, value: 4, title: "3 emails per week" },
            // { from: 1, to: 3, value: 1, title: "5 emails per week" },
            // { from: 1, to: 3, value: 1, title: "1 emails per week" },
            // { from: 2, to: 7, value: 4, title: "4 emails per week" },
        ];

        // Instantiate our network object.
        var container = document.getElementById("mynetwork");
        // let container = netRef.current
        var data = {
            nodes: nodes,
            edges: edges,
        };
        var optionss = {
            autoResize: false,
            layout: {
                hierarchical: false
            },
            nodes: {
                shape: "circle",
                // title:"hover",
                // shape: 'dot',
                title: 'hover',
                color: {
                    border: '#CCC',
                    background: '#ADE',
                    highlight: {
                      border: '#2B7CE9',
                      background: '#D2E5FF'
                    },
                    hover: {
                    //   border: '#2B7CE9',
                    //   background: '#D2E5FF'
                    }
                  },
            },
            edges: {
                // smooth: {
                //     type: 'cubicBezier'
                // },
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: 0.3
                    },

                }

            },
            interaction: {
                dragNodes: true,
                hover: true,
                tooltipDelay: 300,
                selectable: true,
                navigationButtons: true,
            }
        };
        let network = new Network(netRef.current, data, optionss);

        network.on("click", function (params) {
            // Check if you clicked on a node; if so, display the title (if any) in a popup
            // network.interactionHandler._checkShowPopup(params.pointer.DOM);
            let node = data.nodes.get(this);
            let edge = data.edges
            // network.interactionHandler._checkShowPopup(node);
            window.location.href = "/details/"+params.nodes[0]

            // console.log("ThisNode", node, "This Edge: ", edge, "PARAMS_Node: ", params.nodes[0], "PARAMS_Edge: ", params.edges);
            console.log("CONNECT_EDGES: ", network.getConnectedEdges(params.nodes[0]), "CONNECT_EDGES: ", network.getNodesInCluster(params.nodes[0]));
        });

        network.on("showPopup", function (id) {
            let node = data.nodes.get(id);
            // node.title = DSL.generateNodeScritp(node);
            console.log("THSSS: ",id);
        });

        network.on("hoverNode", function (params) {
            
            let node = data.nodes.get(params.node);
            // node.title = 'AAAAAAAAAAAAAAA';
            // document.getElementById('title').innerHTML = node.title
            // this.interactionHandler.popup.hidden = false
            // console.log("THIS: ",);
        });
    }

    useEffect(() => {
        draw()
    }, [])
    return (<>
        <div id='title'></div>
        <div id='mynetwork' ref={netRef}></div>

    </>
    )
}

export default VisNetwork