http://ponyfoo.com/articles/why-i-write-plain-javascript-modules

# JavaScript

* Simple Made Easy
  * Dijkstra Quote (Simplicity is prerequisite for reliability)
  * Word Origins
  * Simple
  * Easy (emphasize capabilities)
  * Limits
* Construct vs Artifact
  * Change
  * Development Speed
* Easy Yet Complex? (knitted castle)
  * Benefits of Simplicity (lego castle)
  * Making Things Easy
* Complect
  * Compose
  * Modularity and Simplicity
* Abstraction for Simplicity
  * What
  * Who
  * How
  * When, Where
  * Why
* Simplicity is a Choice
  * Dijkstra (Testing shows the presence, not the absence of bugs)
  * Simplicity Made Easy

* Identifying Complexity
  * Patterns and Tools
    - Patterns: "reusable solution to a commonly occurring problem within a given contex" (https://en.wikipedia.org/wiki/Software_design_pattern)
      + Reactive Programing: Pattern for working with data where a value X is computed based on another value Y and, when value Y is updated, value X gets updated accordingly
      + Virtual Dom: Pattern to determine the current state of the DOM by comparing the previous state to against the changes that have occurred
      + Model View Controller (MVC): Pattern for determining how data and logic, displays of data, and input for manipulating the data or displays of data interact
    - Tools: Implementation of a pattern or patterns for use in an application
  * Inherited Complexity
    - Tools that require, or strongly encourage, specific, especially non-native or non-standard, interfaces for interacting with them (will require you to complect your code with the tool)
    - Tools that only work with a specific additional tool (complects your code with that additional tool)
    - Tools that heavily rely upon global namespace (complects with state)
    
  * Pattern Complexity
    - Focus on multiple operations at once
    - Comprised of large sets of functions
    - Underlying functionality is weakly related
    - Includes implementation details
    
  * Tool Complexity
    - Complects, as opposed to compose, multiple patterns together (pattern implementations tightly coupled to each other)
    - Hides complexity of underlying patterns instead of providing simple interfaces for a pattern's functionality (treated as a black box)
    - Includes multiple complex patterns
    - Exposes complex interfaces
    - Exposes interfaces that are far to a general user's understanding or capabilities (often a sign of underlying complexity)

* Mitigating Complexity
  * Identify Patterns, not Tools
    - Tools conflate patterns and author's point of view
    - Work to separate out and identify the individual patterns in a tool from the implementation and author's point of view
    - Tools, like the patterns they encapsulate, are specific to a given context. Identify if they best meet your context
  * Become more comfortable in Vanilla JS
    - More easily identify patterns
    - More easily identify complexity of a given pattern's implementation
    - Allow you to control the complexity you bring in to an application by giving you the ability to write simple abstractions yourself
    - Identify patterns that are are not covered or possible with currently available tools, but may be of use for your context
  * Reduce Your Own Complexity
    - Use a larger number of simple tools as opposed to a smaller number of more complex tools
    - Favor tools that are easily composable and don't require complecting in order to use
    - Identify when a pattern or tool doesn't make sense for your context, and seek out the right pattern or tool for the job (when all you have is a hammer, everything looks like a nail)
  * Complect on Small Surfaces Only
    - When working with a tool that requires complecting, do so on the smallest surface possible
    - Write simple, non-complected abstraction designed to be composable and can stand on their own
    - Create a separate, small interface that composes your abstraction with the complected interface for the tool
    
* Choosing The Right Tool For The Job
  * Operational vs Strategic Speed
    - https://hbr.org/2010/05/need-speed-slow-down
    - Delivering requires balancing operational and strategic speed
    - Picking good tools, and the right tool for the job (and maybe not picking one at all) are all about understanding this balance.
  * Attributes of a Good Tool
    - Simple abstractions for simple patterns, simply composed
    - Composable interfaces for working with other tools
    - Near to a development team's capabilities 
    - Only contains the needed abstractions for the problem; no more, no less
    - Best when doesn't require you to complect your codebase with it to use
    - Has simple artifacts/output
  * Attributes of the Right Tool
    - Is a Good Tool
    - Fits the specific context of the problem being solved
    - Enables a team to maintain both operational and strategic speed while building the desired user interface _across all dimensions of a good interface_ (performance across all devices/screen sizes, allows visual and user experience design best practices to be implemented, allows for accessible interfaces for all users)

