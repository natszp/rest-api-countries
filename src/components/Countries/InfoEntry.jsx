
import classes from './InfoEntry.module.css';

const InfoEntry = (props) => {
	return (
		<p className={classes.info}>
			<span className={classes['info-title']}>{props.title}: </span>
			{props.information}
		</p>
	);
};

export default InfoEntry;