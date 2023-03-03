import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { chapters } from '../config/options';
import logo from '../../data/assets/logo.png';
import fund from '../../data/assets/mbob.jpg';

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
          <Typography variant="h6">6.2  Street Types for Current Assignment</Typography>
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
        <section id="name">
          <Typography variant="h4">STREET NAMEING</Typography>
          <br></br>
          <Typography>
            Street naming in the current scenario may seem manageable and organized at the current stage.
            Over time, as the area grows, new streets will start emerging and old ones may be rerouted. In
            the absence of a street naming mechanism in place, the task can become complicated and
            disorganized. The problems can be manifested in a form of lack of coordination, weakened
            monitoring & management due to frequent name changes, non-sequential numbering and
            duplication. Adherence to the guideline below should alleviate such problems in future.
          </Typography>
          <br />
          <Typography variant="h6">7.1 General Principles of Assigning Street Types</Typography>
          <Typography>
            The principal identifying component of a full street name, which in most cases should uniquely
            distinguish a street from all others.
            <br />
            A full street name shall be unique and used only once in any locality. Except for historically
            significant names, a street name should be easy to read, spell, and pronounce especially during
            emergencies (even for children). The following must be avoided at all times:

          </Typography>
          <br />
          <Typography>
            <span class="highlight">1. </span> Names that tend to be mispronounced or misspelled or are difficult to pronounce or spell.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> Two-word names or one-word names that can be confused as two-word names.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span> Using punctuation or special characters, as usage is reserved in some of the database
            programs.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">4. </span> A continuous street should have only one name signed irrespective of change in direction.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">5. </span>Street names should be made up of a single word of 15 characters or less to minimize the
            data entry error.
          </Typography>
          <br />
          <Typography variant="h6">7.2  Composition of Street Name</Typography>
          <Typography>
            The full street name shall consist of following components based on the order or function of the
            streets.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">First Order Streets: </span> Pre-directions are assigned for first order/ baseline streets to distinguish it from the rest of the
            streets. These should not be assigned the quadrants as those were the basis on which the quadrants.
            were formed.
            <br />
            <span class="highlight">   W Ngojang Zhung Lam :</span>
            It may be noted that the Ngojang Zhung Lam is a baseline connecting the reference points and
            moving towards the west from the reference point.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">Second Order Streets:
            </span>
            The primary streets apart from the baselines and caters to bigger catchments fall in this category.
            The type assigned is Lam and it must reflect the quadrant that the stretch falls in.
            <br />
            <span class="highlight">  Gatshel Lam SE</span>
            <br />

            It may be noted that the Gatshel Lam SE is a main street connecting the baseline and falls in the
            south east quadrant.

          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">Third Order Streets:
            </span> Those streets that are relatively short and usually branch out from the main street fall in this
            category. The parent street (Lam) is segmented into 50m stretches for which reserved numbers
            were generated as provisions for future road extensions.
            The name of the Zur Lam is subsequently inherited from the parent street (Lam) and the number
            is assigned based on the provision kept.
            <br />
            <span class="highlight">Chhogyal Zur Lam 1 SE</span>
            <br />
            It may be noted that the Chhogyal Zur Lam 1 SE is a secondary street connecting the main
            street Chhogyal Lam SE on segment number 1 and falls in the south east quadrant.
            <br />
            If there is more than one Zur Lam on the parent street, this streets may have names of the parent street with suffix of dzongkhag alphabet.
            <br />
            <span class="highlight">Chhogyal Zur Lam 1 Kaa SE</span>
          </Typography>

          <br />
          <Typography>
            <span class="highlight">Fourth Order Streets:
            </span>Streets that branch out further from the Zur Lam are assigned suffixes while the number is
            inherited from the parent Zur Lam.
            <br />
            <span class="highlight">Losel Zur Lam 1A SE</span>
            <br />
            It may be noted that the Losel Zur Lam 1A SE is a first third order street connecting the
            secondary street Losel Zur Lam 1 SE and falls in the south east quadrant.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">Fifth Order Streets:
            </span>Streets that branch out further from the fourth order streets are considered as the access road.
            Fifth order streets have no street names.
            <br />
            OR
            <br />
            Some of this street may have names of the parent street with suffix of dzongkhag alphabet.
            <br />
            <span class="highlight">Losel Zur Lam 1A Kaa SE</span>
            <br />
            It may be noted that the Losel Zur Lam 1A Kaa SE is a first fifth order street connecting the fourth order street Losel Zur Lam 1A SE  and falls in the south east quadrant.
          </Typography>
        </section>
        <section id="plot">
          <Typography variant="h4">PLOT NUMBERING</Typography>
          <br></br>
          <Typography>
            These general principles will hold while numbering the plots:
          </Typography>
          <br />
          <Typography>
            <span class="highlight">1. </span> Plot with the area equal to or less than 19 decimal (0.189 Acres) will be assigned with
            one plot number.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> Plot with area equal to multiple of 10 decimal (0.099 Acres) will be assigned with the
            plot numbers equal to the multiple of 10 only if the plot is undeveloped or under
            developed.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span> The streets of all orders can have contribute to plot numbering except the fifth order
            streets.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">4. </span> Numbering should always commence from reference point considering its number as
            100.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">5.  </span> For second order streets, the nearest end to the main reference point is considered as
            new shifted reference point.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">6. </span> For all third and fourth order streets, the reference point is the originating point of
            second and third order streets respectively.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">7. </span> Even numbers should be assigned to the right side of streets and odd numbers to the left side as
            travel away from reference point of street.
          </Typography>
          <br />
        </section>
        <section id="building">
          <Typography variant="h4">BUILDING ADDRESS</Typography>
          <br></br>
          <Typography>
            Building address is a unique entity that consists of the street name and building number which is
            unique in the street.
            <br />
            <span class="highlight"> 102, E Phendey Lam</span>
            <br />
            Building is the first plot in right hand side of the street name E Phendey Lam from reference
            point with building number 102.
          </Typography>
          <br />
          <Typography variant="h6">9.1 Building Numbering</Typography>
          <Typography>
            These general principles hold while numbering the house:
          </Typography>
          <br />
          <Typography>
            <span class="highlight">1. </span> The building should hold same number and street name as plot.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">2.  </span> If the plot has more than one plot number, the building will be assigned with building
            number and street name nearest to main entrance.
          </Typography>
          <br></br>
          <Typography>
            <span class="highlight">3. </span> If building has multiple entrance, the entrance facing the highest order street will be
            considered as main entrance.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">4. </span> If there is multiple building in same plot than the building number will be the plot number followed by suffix of English alphabet which would be assign based on the year of construction.
          </Typography>
          <br />
          <Typography>
            <span class="highlight">5. </span> In case of institution, the building number will be the plot number followed by suffix of English alphabet.
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h4">Help me to host</Typography>
          <br></br>
          <Typography>
            <Typography  class="donate"> Scan & Pay </Typography>
            <Typography class="donate">through</Typography>
            <Typography class="donate">goBoB or mBoB</Typography>
            <br />
          </Typography>
          <img class="figure" src={fund} alt="Fund"></img>
          <br></br>
          <br></br>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
