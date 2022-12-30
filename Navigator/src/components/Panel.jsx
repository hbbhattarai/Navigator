import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { chapters } from '../config/options';
import logo from '../../data/assets/logo.png';
import precip from '../../data/assets/precip.png';
import hindu from '../../data/assets/hindu.jpeg';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute('class', 'active');
    document.getElementById(chapterName).setAttribute('class', '');

    updateChapter(newChapter);
  }

  isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }


  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="gelephu" className="active">
          <Typography variant="h3">Gelephu Thromde</Typography>
          <Typography>
            Gelephu is located at about 30 kms to the east of Sarpang, the Dzongkhag Headquarters.
            Though, Sarpang is the administrative centre for the Dzongkhag, Gelephu, due to various factors, has prospered and developed as a market town serving the hinterland.
            The geographical setting of the town with relatively flat terrain, close proximity and well established connectivity with India,
            and its location as a nodal connection for the central parts of Bhutan,
            <span class="highlight">makes the place one of the preferred locations for future development</span>.
          </Typography>
          <br></br>
          <img class="figure" src={logo} alt="Thromde Logo"></img>
          <br></br>
          <Typography variant="h6">CLIMATE &amp; ANNUAL PRECIPITATION</Typography>
          <Typography>
            Like other southern belt of the country at the foothills of the Himalayas has a <span class="highlight">subtropical climate</span> with high humidity, heavy rainfall, and average temperatures of approximately 15°C-30°C year-round.with average temperatures from <span class="highlight"> 20 &deg;C to 34 &deg;C </span> .
          </Typography>
          <br></br>
          <img class="figure" src={precip} alt="Average Temperature & precipitation"></img>
        </section>
        <section id="landmarks">
          <Typography variant="h3">Landmarks of Gelephu</Typography>
          <Typography>
          Gelephu is loudly known to Bhutanese and tourists as the bustling town that shares a border with the neighbouring country India. Only a few people know the fact that Gelephu is now home to numerous Lhakhang. I was blown away with the numbers of Lhakhang that exists right now. Few more are <span class="highlight">under construction</span>.
          </Typography>
          <br></br>
          <Typography variant="h6">Lord Shiva Temple</Typography>
          <Typography>
          As you drive along the thick teak vegetation of Gelephu-Trongsa Highway, few KMs away from the town towards Shetikhareu to your left you will see a magnificent Hindu temple standing tall. The main statue inside is <span class="highlight">Lord Shiva build</span> in White marble.
          </Typography>
          <br></br>
          <img class="figure" src={hindu} alt="Distribution of buildings"></img>
          <br></br>
          <Typography variant="h6">Central Regional Referral Hospital</Typography>
          <Typography>
          One of the 3 Tertiary Care Hospitals of Bhutan, CRRH Gelephu caters to the people of <span class="highlight">6 Central Districts</span>.
          </Typography>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
