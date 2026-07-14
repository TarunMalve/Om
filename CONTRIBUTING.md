# Contributing Guidelines

Thank you for contributing to the Om project! To maintain the quality and consistency of our codebase and architectural documentation, please follow these guidelines.

---

## 1. Code of Conduct
We are committed to fostering an open, welcoming, and respectful environment. Please ensure that all interactions remain civil, professional, and aligned with our project values.

---

## 2. Documentation Standards
Since our current phase focus is architecture and system design:
* All documentation must be composed in clean, standard Markdown.
* Use exact case-sensitive slugs, unified routes, and strict IAST/Devanagari standards for Sanskrit terms.
* All architectural decisions affecting routing, database design, or AI modules must be logged as Architectural Decision Records (ADRs) under `docs/09_Decisions/`.

---

## 3. Branching Strategy
We follow a Git Flow style approach for development:
* `main`: Represents production-ready status.
* `develop`: Integration branch for new features and documentation updates.
* Feature branches: Named `feature/[issue-number]-description` or `docs/[issue-number]-description`.
* Bugfix branches: Named `bugfix/[issue-number]-description`.

---

## 4. Commit Message Conventions
Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
* **Format**: `<type>(<scope>): <description>`
* **Types**:
  - `feat`: A new feature or system module.
  - `fix`: A bug fix.
  - `docs`: Documentation-only changes.
  - `style`: Changes that do not affect code logic (formatting, spacing).
  - `refactor`: Code changes that neither fix a bug nor add a feature.
  - `chore`: Maintenance tasks, dependencies updates, configuration changes.

**Example**:
```bash
docs(ontology): add SHACL shapes validation schema in P03
```

---

## 5. Pull Request & Review Process
1. Create a branch from `develop`.
2. Commit your changes and push them to your fork.
3. Open a Pull Request (PR) using our pull request template.
4. Ensure the build pipeline and automated validation checks pass.
5. All changes require approval from at least one core maintainer before merging.
