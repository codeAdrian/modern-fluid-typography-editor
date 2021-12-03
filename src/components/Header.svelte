<header class="header">
	<h1>
		<a class="header__link header__link--title" href="/"> Modern fluid typography editor </a>
	</h1>

	<nav>
		<ul class="header__list">
			<li><a class="header__link" href="/about">About</a></li>
		</ul>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header__link {
		display: block;
		text-decoration: none;
		color: var(--color-gray-light);
		margin: 0;
		padding: var(--spacing-n1) var(--spacing-1);
	}

	.header__link--title {
		color: var(--color-primary);
	}

	.header__link--title:hover {
		color: var(--color-primary-tint);
	}

	.header__list {
		list-style: none;
		padding: 0;
	}
</style>
