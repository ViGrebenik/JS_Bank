const SITE_NAME = 'JS Vanilla Bank | '

export const getTitle = title => {
	return title ? `${SITE_NAME + title}` : SITE_NAME
}
