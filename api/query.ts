// Queries the framer.data.json file for specific entities. Useful for
// verifying which id to use for a specific API item when trying to fix
// broken references.
//
// Can be called either with a single command line argument or without
// arguments to start a repl.
//
// Usage:
// yarn ts-node ./api/query.ts '(animate:function)'
import * as readline from "readline"
import { FramerAPI } from "./FramerAPI"
import json from "../components/framer.data"

const api = new FramerAPI(json as any)
const query = process.argv[2]

if (query) {
    console.log(`Searching for ${query}:`)
    console.log(api.resolve(query))
} else {
    console.log("Starting query repl press ctrl-c to exit:")
    process.stdout.write("query> ")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    })

    rl.on("line", function(line) {
        console.log(api.resolve(line))
        process.stdout.write("query> ")
    })
}
