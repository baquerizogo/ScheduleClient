import Link from 'next/link'

const ContentHeader = ({root, section, path}) => {
    return (  
        <div class="content-header row">
            <div class="content-header-left col-md-9 col-12 mb-2">
                <div class="row breadcrumbs-top">
                    <div class="col-12">
                        <h2 class="content-header-title float-left mb-0">{path}</h2>
                        <div class="breadcrumb-wrapper">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link href="/"><a>{root}</a></Link>
                                </li>
                                <li class="breadcrumb-item"><Link href="#"><a>{section}</a></Link>
                                </li>
                                <li class="breadcrumb-item active"><Link href="#"><a>{path}</a></Link>
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