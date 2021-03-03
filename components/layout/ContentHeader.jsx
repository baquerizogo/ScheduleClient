import Link from 'next/link'

const ContentHeader = ({root, section, path}) => {
    return (  
        <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
                <div className="row breadcrumbs-top">
                    <div className="col-12">
                        <h2 className="content-header-title float-left mb-0">{path}</h2>
                        <div className="breadcrumb-wrapper">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/"><a>{root}</a></Link>
                                </li>
                                <li className="breadcrumb-item"><Link href="#"><a>{section}</a></Link>
                                </li>
                                <li className="breadcrumb-item active"><Link href="#"><a>{path}</a></Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContentHeader;