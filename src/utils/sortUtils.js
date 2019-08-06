import moment from 'moment';
import siteConfig from '../../data/SiteConfig';

export const sortByDate = (a, b) => {
	const dateA = moment(
		a.node.date,
		siteConfig.dateFormat
	);

	const dateB = moment(
		b.node.date,
		siteConfig.dateFormat
	);

	if (dateA.isBefore(dateB)) return 1;
	if (dateB.isBefore(dateA)) return -1;

	return 0;
}

