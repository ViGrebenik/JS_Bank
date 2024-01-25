export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHtml = `<header>
			Header
				<nav>
					<a href="/">Home</a>
					<a href="/auth">Auth</a>
				</nav
		</header>`

		return `
			${headerHtml}
			<main>
				${this.children}
			</main>
		`
	}
}
