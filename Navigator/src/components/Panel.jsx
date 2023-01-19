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
          <Typography variant="h4">INTRODUCTION</Typography>
          <br></br>
          <Typography variant="h6">1.1  Background</Typography>
          <Typography>
            Gelephu is located about 30 kms to the east of Sarpang, the Dzongkhag headquarters. Though
            Sarpang is the administrative center for the Dzongkhag, Gelephu due to various factors, has
            prospered and developed as a market town serving the hinterland.
            The Sarpang-Gelephu Zone offers  <span class="highlight">unique opportunities</span> for Bhutan, as well as for the citizens
            within the services catchment area.
          </Typography>
          <br></br>
          <img class="figure" src={logo} alt="Thromde Logo"></img>
          <br></br>
          <Typography variant="h6">1.2  Need for Addressing System</Typography>
          <Typography>
            The need for city addressing is critical for efficient functioning. Addressing system is evidently
            crucial for navigational purposes but even the most basic service requires locational information
            for effective and efficient service delivery. The importance of proper addressing cannot be
            overstated; during emergency it can mean, quite literally, the difference between life and death.
            A logical and consistent addressing system, therefore, can tangibly improve the quality of life in
            a community.
            This method <span class="highlight">identify and designate streets</span>  a basis on which plot shall be numbered and
            consequently the building and the units.
          </Typography>
          <br></br>
        </section>
        <section id="goals">
          <Typography variant="h4">PURPOSE & GOALS</Typography>
          <br></br>
          <Typography variant="h6">2.1 &amp; Purpose</Typography>
          <Typography>
            The purpose of this document, <span class="highlight">Addressing Standards and Guidelines for Gelephu Thromde</span>, is to
            formulate procedures to facilitate the Thromde in implementing a standardized addressing system
            for consistency and continuity.
            The document assumes that street addressing is a prerogative of the Thromde.
          </Typography>
          <br></br>
          <Typography variant="h6">2.2 &amp; Goals</Typography>
          <Typography>
            The primary goal of this document is to  <span class="highlight">formulate a set of addressing guidelines</span> for consistency
            in addressing systems and preserve systemic continuity which subsequently lead to efficient
            management of services.
          </Typography>
          <Typography>
            Secondary goals include:
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">1. </span> To improve the quality of life for residents of Gelephu Thromde through improved delivery
            of emergency services.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">2. </span> To make the city navigation more user-friendly.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span>To make address simpler to the residents and businesses.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">4. </span> To emphasize the importance of a consistent addressing system for Thromde.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">5. </span> To promote the use of GIS for creation and maintenance of a roads database.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">6. </span> To improve Thromde management in terms of planning, monitoring, taxation, maintenance
            and service delivery.
          </Typography>
          <br></br>
        </section>
        <section id="reference">
          <Typography variant="h4">REFERENCE POINT & BASELINES</Typography>
          <br></br>
          <Typography variant="h6">3.1 &amp; Establishing the a reference point</Typography>
          <Typography>
            The process of assigning street names and numbers should begin by establishing a reference
            point. The reference point should be an appropriate locale such as a   <span class="highlight">prominent intersection of the
              two main street </span>. Ideally, the reference point will be near the center of the study area.
          </Typography>
          <br></br>
          <Typography variant="h6">3.2 &amp; Establishing Baselines</Typography>
          <Typography>
            The two streets that intersect at the reference point is called baselines. The baselines should
            continue all the way to the boundary, even if this requires one or more changes in contiguous
            streets en route. Thereby dividing the area into four roughly equivalent sections, or quadrants.
            Ideally, the baselines will emanate from the reference point in predominantly  <span class="highlight"> N-S and E-W </span>
            directions.
          </Typography>
          <br></br>

          <Typography>
            <span class="highlight">The linear development of the city in a north-south direction enabled to identify the baseline as
              Samdhen & Ngedrup Zhung Lam and in the east-west direction as Ngojang & Phendhey Zhung
              Lam. Thus, the resulting intersection is considered as reference point. </span>
          </Typography>

        </section>

        <section id="quadrant">
          <Typography variant="h4">ASSIGNING QUADRANTS</Typography>
          <br></br>
          <Typography variant="h6">4.1  General Principles of Assigning Quadrants</Typography>
          <Typography>
            For all streets, these general principles will hold:
          </Typography>
          <br />
          <Typography>
            <span class="highlight">1. </span> A quadrant should be assigned to every street except streets that form baselines.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> By assigning a quadrant to a street, one can quickly determine where a street is in relation
            to the reference point and baselines. There are only four acceptable values for this
            element ( NW,NE,SW,SE).
          </Typography>
          <br></br>
          <Typography class="highlight">
            The baselines divide the Thromde area into four quadrants and each reference was assigned to
            their respective quadrants.
          </Typography>
          <br></br>
          <Typography variant="h4">PRE DIRECTIONS</Typography>
          <br></br>
          <Typography>
            The predominant compass direction assigned to the baseline streets based on the reference points
            (e.g., N, S, E, and W).
            <br />
          </Typography>
          <br />
          <Typography>
            <span class="highlight">1.</span>  Pre-directions should be used only for the first order baseline streets to indicate the
            primary direction that the street travels from the reference point.
          </Typography>
          <Typography>
            <br />
            <span class="highlight">2.</span> Pre-direction should consist of only one primary direction N, S, E, W (North, South, East,
            or West).
          </Typography>
          <Typography>
            <br />
            <span class="highlight">3.</span>  Pre direction shall not be assigned for the stretch of the baseline which runs between the
            reference points.
          </Typography>
        </section>

        <section id="order">
          <Typography variant="h4">ASSIGNING EACH STREET AN ORDER</Typography>
          <br></br>
          <Typography>
            After a reference point and baselines have been established, a   <span class="highlight"> tree branch scheme </span> should be used
            to assign an order to each street. The baseline roads act as the trunk of the tree and are referred to
            as first order streets. Any street that intersects a baseline street is designated a second order street
            except short streets which act as access from another second order street/ third order street. Any
            street that intersects a second order street, and that is not baseline or second order streets, is
            designated as a third order street. This process should continue until all streets are assigned an
            order.
          </Typography>
          <br />
        </section>
        <section id="type">
          <Typography variant="h4">STREET TYPES</Typography>
          <br></br>
          <Typography variant="h6">6.1 General Principles of Assigning Street Types</Typography>
          <Typography>
            For all streets, these general principles should hold:
          </Typography>
          <br />
          <Typography>
            <span class="highlight">1. </span> Every street should be assigned a street type. Street type carry certain expectations of the
            length, shape, direction, width and other characteristics.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> Maintain a clear distinction between street name and street type.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span> Create an exhaustive list of street types to be used.
          </Typography>
          <br />
          <Typography variant="h6">6.2  Street Types for Current Assignmen</Typography>
          <Typography>
            The streets are classified into following types:
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">1. </span> Zhung Lam: All national highways falls into this category.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> Lam: The second order streets are classified as Lam.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span> Zur Lam: The third order streets.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">4. </span> Zur Lam with suffix: The fourth order streets.
          </Typography>
          <br />
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
