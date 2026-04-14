## Project Intelligence & Documentation Protocol

This configuration governs the automated maintenance of a high-fidelity project intelligence repo.

### Directory Mapping

* **Root Documentation Path**: `/Users/ericcui/Library/Mobile Documents/com~apple~CloudDocs/Documents/Obsidian Vault/SEO Clients/Taylor`
* **The Ingestor (Scratchpad)**: `/Users/ericcui/Library/Mobile Documents/com~apple~CloudDocs/Documents/Obsidian Vault/SEO Clients/Taylor/Scratch.md`

### Operational Workflow: "The Integration Loop"

When prompted to process the information present in the **Scratchpad**, Claude Code shall execute the following logic:

1. **Decomposition**: Parse the information present in the scratchpad file into atomic concepts.
2. **Entity Resolution**:
	* Search existing directories for topical matches.
	* If a topical match exists integrate the information into the matched file.
	* If no match exists, create a new file in the appropriate directory to house the information.
	* Prioritize brevity and maximal knowledge density - expand only when necessary and ambiguous and prioritize summarizing concepts so the knowledge base is not needlessly bloated.
3. **Cleanup**: Once information is successfully integrated, clear the integrated sections from the scratchpad