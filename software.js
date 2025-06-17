// 软件数据
const softwareData = [
    // Adobe软件
    { 
        name: "Photoshop", 
        category: "Adobe", 
        desc: "专业的图像处理软件，广泛用于照片编辑、数字绘画、图形设计等领域。", 
        icon: "fa-image",
        officialLink: "https://www.adobe.com/cn/products/photoshop.html",
        cloudLink: "https://pan.baidu.com/s/1B4DqOfz0Wb6O_SJ8lg33qw?pwd=6666"
    },
    { 
        name: "Illustrator", 
        category: "Adobe", 
        desc: "专业的矢量图形设计软件，主要用于插画、标志设计、排版等。", 
        icon: "fa-bezier-curve",
        officialLink: "https://www.adobe.com/cn/products/illustrator.html",
        cloudLink: "https://pan.baidu.com/s/example-illustrator"
    },
    { 
        name: "Premiere", 
        category: "Adobe", 
        desc: "专业的视频编辑软件，广泛用于电影、电视和网络视频制作。", 
        icon: "fa-film",
        officialLink: "https://www.adobe.com/cn/products/premiere.html",
        cloudLink: "https://pan.baidu.com/s/example-premiere"
    },
    { 
        name: "After Effects", 
        category: "Adobe", 
        desc: "专业的视频特效和动态图形软件，用于电影、电视和网络视频的后期制作。", 
        icon: "fa-magic",
        officialLink: "https://www.adobe.com/cn/products/aftereffects.html",
        cloudLink: "https://pan.baidu.com/s/example-aftereffects"
    },
    { 
        name: "InDesign", 
        category: "Adobe", 
        desc: "专业的排版软件，主要用于杂志、书籍、海报等印刷品的排版设计。", 
        icon: "fa-book",
        officialLink: "https://www.adobe.com/cn/products/indesign.html",
        cloudLink: "https://pan.baidu.com/s/example-indesign"
    },
    { 
        name: "Acrobat", 
        category: "Adobe", 
        desc: "专业的PDF文档处理软件，用于创建、编辑和查看PDF文件。", 
        icon: "fa-file-pdf",
        officialLink: "https://www.adobe.com/cn/acrobat.html",
        cloudLink: "https://pan.baidu.com/s/example-acrobat"
    },
    { 
        name: "Lightroom", 
        category: "Adobe", 
        desc: "专业的照片管理和编辑软件，特别适合摄影师使用。", 
        icon: "fa-camera",
        officialLink: "https://www.adobe.com/cn/products/photoshop-lightroom.html",
        cloudLink: "https://pan.baidu.com/s/example-lightroom"
    },
    { 
        name: "Dreamweaver", 
        category: "Adobe", 
        desc: "专业的网页设计和开发软件，支持代码和可视化编辑。", 
        icon: "fa-code",
        officialLink: "https://www.adobe.com/cn/products/dreamweaver.html",
        cloudLink: "https://pan.baidu.com/s/example-dreamweaver"
    },
    { 
        name: "Audition", 
        category: "Adobe", 
        desc: "专业的音频编辑和混音软件，用于录音、编辑和制作音频内容。", 
        icon: "fa-microphone",
        officialLink: "https://www.adobe.com/cn/products/audition.html",
        cloudLink: "https://pan.baidu.com/s/example-audition"
    },
    { name: "Bridge", category: "Adobe", desc: "专业的文件浏览和管理软件，用于在Adobe Creative Cloud应用程序之间组织和管理文件。", icon: "fa-folder" },
    { name: "Character Animator", category: "Adobe", desc: "专业的2D角色动画软件，可以实时捕捉面部表情和动作。", icon: "fa-user" },
    { name: "Dimension", category: "Adobe", desc: "专业的3D设计软件，用于创建产品包装、品牌视觉等3D效果。", icon: "fa-cube" },
    { name: "Capture One", category: "Adobe", desc: "专业的RAW图像处理软件，特别适合摄影师使用。", icon: "fa-camera-retro" },
    { name: "ACDSee", category: "Adobe", desc: "专业的图像管理和编辑软件，支持多种图像格式。", icon: "fa-image" },
    { name: "SketchBook", category: "Adobe", desc: "专业的数字绘画和素描软件，适合艺术家和设计师使用。", icon: "fa-palette" },
    { name: "Prelude", category: "Adobe", desc: "专业的视频采集和日志记录软件，用于视频制作的前期工作。", icon: "fa-video" },
    { name: "Maya", category: "Adobe", desc: "Autodesk Maya 是一款专业的3D建模、动画和渲染软件，广泛用于电影、游戏和动画制作。", icon: "fa-cube" },
    { name: "Cinema 4D", category: "Adobe", desc: "Maxon Cinema 4D 是一款专业的3D建模、动画和渲染软件，以其易用性和强大的功能著称。", icon: "fa-cube" },

    // CAD软件
    { 
        name: "AutoCAD", 
        category: "CAD", 
        desc: "Autodesk AutoCAD 是一款专业的计算机辅助设计(CAD)软件，广泛用于建筑、工程和制造领域。", 
        icon: "fa-drafting-compass",
        officialLink: "https://www.autodesk.com.cn/products/autocad/overview",
        cloudLink: "https://pan.baidu.com/s/example-autocad"
    },
    { 
        name: "CAD MAP 3D", 
        category: "CAD", 
        desc: "Autodesk CAD MAP 3D 是一款专业的GIS和CAD集成软件，用于地图制作和空间数据分析。", 
        icon: "fa-map-marked-alt",
        officialLink: "https://www.autodesk.com.cn/products/autocad-map-3d/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadmap3d"
    },
    { 
        name: "CAD MEP", 
        category: "CAD", 
        desc: "Autodesk CAD MEP 是一款专业的机械、电气和管道(MEP)设计软件。", 
        icon: "fa-tools",
        officialLink: "https://www.autodesk.com.cn/products/autocad-mep/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadmep"
    },
    { 
        name: "CAD Plant 3D", 
        category: "CAD", 
        desc: "Autodesk CAD Plant 3D 是一款专业的工厂设计软件，用于工厂布局和管道设计。", 
        icon: "fa-industry",
        officialLink: "https://www.autodesk.com.cn/products/autocad-plant-3d/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadplant3d"
    },
    { 
        name: "CAD 建筑版", 
        category: "CAD", 
        desc: "Autodesk AutoCAD Architecture 是一款专业的建筑设计软件，基于AutoCAD平台。", 
        icon: "fa-building",
        officialLink: "https://www.autodesk.com.cn/products/autocad-architecture/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadarchitecture"
    },
    { 
        name: "CAD 机械版", 
        category: "CAD", 
        desc: "Autodesk AutoCAD Mechanical 是一款专业的机械设计软件，基于AutoCAD平台。", 
        icon: "fa-cog",
        officialLink: "https://www.autodesk.com.cn/products/autocad-mechanical/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadmechanical"
    },
    { 
        name: "CAD 电气版", 
        category: "CAD", 
        desc: "Autodesk AutoCAD Electrical 是一款专业的电气设计软件，基于AutoCAD平台。", 
        icon: "fa-bolt",
        officialLink: "https://www.autodesk.com.cn/products/autocad-electrical/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadelectrical"
    },
    { 
        name: "CAD 精简版", 
        category: "CAD", 
        desc: "Autodesk AutoCAD LT 是一款精简版的CAD软件，专注于2D绘图功能。", 
        icon: "fa-pen-ruler",
        officialLink: "https://www.autodesk.com.cn/products/autocad-lt/overview",
        cloudLink: "https://pan.baidu.com/s/example-cadlt"
    },
    { name: "CAD 迷你", category: "CAD", desc: "可能是指Autodesk AutoCAD的简化版本或第三方开发的轻量级CAD软件。", icon: "fa-compress-arrows-alt" },
    { name: "CAXA 3D实体设计", category: "CAD", desc: "CAXA 3D实体设计是一款国产的3D CAD设计软件，支持实体建模和参数化设计。", icon: "fa-cube" },
    { name: "CAXA CAD电子图板", category: "CAD", desc: "CAXA CAD电子图板是一款国产的2D CAD设计软件，主要用于工程制图。", icon: "fa-pen-ruler" },
    { name: "CAXA CAPP工艺图表", category: "CAD", desc: "CAXA CAPP工艺图表是一款国产的工艺设计软件，用于工艺规程编制。", icon: "fa-chart-line" },
    { name: "天正T20", category: "CAD", desc: "天正T20是一款基于AutoCAD平台的建筑设计软件，专为建筑行业设计。", icon: "fa-building" },

    // 三维设计软件
    { 
        name: "3ds Max", 
        category: "三维设计", 
        desc: "Autodesk 3ds Max 是一款专业的3D建模、动画和渲染软件，广泛用于游戏和影视制作。", 
        icon: "fa-cube",
        officialLink: "https://www.autodesk.com.cn/products/3ds-max/overview",
        cloudLink: "https://pan.baidu.com/s/example-3dsmax"
    },
    { 
        name: "Artlantis", 
        category: "三维设计", 
        desc: "Artlantis 是一款专业的渲染软件，特别适合建筑可视化和室内设计。", 
        icon: "fa-sun",
        officialLink: "https://artlantis.com/en/",
        cloudLink: "https://pan.baidu.com/s/example-artlantis"
    },
    { 
        name: "CorelCAD", 
        category: "三维设计", 
        desc: "CorelCAD 是一款专业的2D/3D CAD软件，兼容DWG格式，适合建筑和工程领域。", 
        icon: "fa-drafting-compass",
        officialLink: "https://www.coreldraw.com/cn/product/corelcad/",
        cloudLink: "https://pan.baidu.com/s/example-corelcad"
    },
    { 
        name: "Lumion", 
        category: "三维设计", 
        desc: "Lumion 是一款专业的建筑可视化软件，以其实时渲染功能著称。", 
        icon: "fa-bolt",
        officialLink: "https://lumion.com/",
        cloudLink: "https://pan.baidu.com/s/example-lumion"
    },
    { 
        name: "SketchUp Pro", 
        category: "三维设计", 
        desc: "Trimble SketchUp Pro 是一款专业的3D建模软件，以其易用性著称。", 
        icon: "fa-cube",
        officialLink: "https://www.sketchup.com/",
        cloudLink: "https://pan.baidu.com/s/example-sketchup"
    },
    { 
        name: "V-Ray for 3dsmax", 
        category: "三维设计", 
        desc: "Chaos Group V-Ray 是一款专业的渲染插件，支持3ds Max等3D软件。", 
        icon: "fa-magic",
        officialLink: "https://www.chaosgroup.com/vray/3ds-max",
        cloudLink: "https://pan.baidu.com/s/example-vray3dsmax"
    },
    { 
        name: "V-Ray for Rhino", 
        category: "三维设计", 
        desc: "Chaos Group V-Ray 是一款专业的渲染插件，支持Rhino 3D软件。", 
        icon: "fa-magic",
        officialLink: "https://www.chaosgroup.com/vray/rhino",
        cloudLink: "https://pan.baidu.com/s/example-vrayrhino"
    },
    { 
        name: "V-Ray for SketchUp", 
        category: "三维设计", 
        desc: "Chaos Group V-Ray 是一款专业的渲染插件，支持SketchUp软件。", 
        icon: "fa-magic",
        officialLink: "https://www.chaosgroup.com/vray/sketchup",
        cloudLink: "https://pan.baidu.com/s/example-vraysketchup"
    },
    { 
        name: "Blender", 
        category: "三维设计", 
        desc: "Blender 是一款开源的3D创作套件，支持建模、动画、渲染、视频编辑等功能。", 
        icon: "fa-cube",
        officialLink: "https://www.blender.org/",
        cloudLink: "https://pan.baidu.com/s/example-blender"
    },

    // 图像处理软件
    { 
        name: "ACDSee", 
        category: "图像处理", 
        desc: "ACDSee 是一款专业的图像管理和编辑软件，支持多种图像格式。", 
        icon: "fa-image",
        officialLink: "https://www.acdsee.com/",
        cloudLink: "https://pan.baidu.com/s/example-acdsee"
    },
    { 
        name: "Capture One", 
        category: "图像处理", 
        desc: "Capture One 是一款专业的RAW图像处理软件，特别适合摄影师使用。", 
        icon: "fa-camera-retro",
        officialLink: "https://www.captureone.com/",
        cloudLink: "https://pan.baidu.com/s/example-captureone"
    },
    { 
        name: "Corel Painter", 
        category: "图像处理", 
        desc: "Corel Painter 是一款专业的数字绘画软件，模拟传统绘画工具。", 
        icon: "fa-palette",
        officialLink: "https://www.painterartist.com/",
        cloudLink: "https://pan.baidu.com/s/example-corelpainter"
    },
    { 
        name: "SAI", 
        category: "图像处理", 
        desc: "SAI (Easy Paint Tool SAI) 是一款轻量级的数字绘画软件，特别适合插画师使用。", 
        icon: "fa-paint-brush",
        officialLink: "https://www.systemax.jp/en/sai/",
        cloudLink: "https://pan.baidu.com/s/example-sai"
    },

    // 建筑设计软件
    { 
        name: "Civil 3D", 
        category: "建筑设计", 
        desc: "Autodesk Civil 3D 是一款专业的土木工程设计软件，用于道路、桥梁等基础设施设计。", 
        icon: "fa-road",
        officialLink: "https://www.autodesk.com.cn/products/civil-3d/overview",
        cloudLink: "https://pan.baidu.com/s/example-civil3d"
    },
    { 
        name: "Fuzor", 
        category: "建筑设计", 
        desc: "Fuzor 是一款专业的BIM虚拟现实(VR)软件，用于建筑项目的可视化和协作。", 
        icon: "fa-vr-cardboard",
        officialLink: "https://www.kalloctech.com/",
        cloudLink: "https://pan.baidu.com/s/example-fuzor"
    },
    { 
        name: "Navisworks", 
        category: "建筑设计", 
        desc: "Autodesk Navisworks 是一款专业的施工模拟和协调软件，用于建筑项目的可视化和管理。", 
        icon: "fa-project-diagram",
        officialLink: "https://www.autodesk.com.cn/products/navisworks/overview",
        cloudLink: "https://pan.baidu.com/s/example-navisworks"
    },
    { 
        name: "Revit", 
        category: "建筑设计", 
        desc: "Autodesk Revit 是一款专业的BIM(建筑信息模型)软件，用于建筑、结构和MEP设计。", 
        icon: "fa-building",
        officialLink: "https://www.autodesk.com.cn/products/revit/overview",
        cloudLink: "https://pan.baidu.com/s/example-revit"
    },
    { name: "Tekla Structures", category: "建筑设计", desc: "Tekla Structures 是一款专业的钢结构和混凝土结构设计软件。", icon: "fa-industry" },
    { name: "Vectorworks", category: "建筑设计", desc: "Vectorworks 是一款专业的CAD和BIM软件，适用于建筑、景观和娱乐设计。", icon: "fa-drafting-compass" },

    // 影视动画软件
    { 
        name: "Cinema 4D", 
        category: "影视动画", 
        desc: "Maxon Cinema 4D 是一款专业的3D建模、动画和渲染软件，以其易用性和强大的功能著称。", 
        icon: "fa-cube",
        officialLink: "https://www.maxon.net/en/cinema-4d",
        cloudLink: "https://pan.baidu.com/s/example-cinema4d"
    },
    { 
        name: "Cubase", 
        category: "影视动画", 
        desc: "Steinberg Cubase 是一款专业的数字音频工作站(DAW)软件，用于音乐制作和音频编辑。", 
        icon: "fa-music",
        officialLink: "https://www.steinberg.net/cubase/",
        cloudLink: "https://pan.baidu.com/s/example-cubase"
    },
    { 
        name: "DaVinci Resolve", 
        category: "影视动画", 
        desc: "Blackmagic Design DaVinci Resolve 是一款专业的视频编辑和色彩校正软件。", 
        icon: "fa-film",
        officialLink: "https://www.blackmagicdesign.com/products/davinciresolve/",
        cloudLink: "https://pan.baidu.com/s/example-davinci"
    },
    { 
        name: "Edius Pro", 
        category: "影视动画", 
        desc: "Grass Valley Edius Pro 是一款专业的视频编辑软件，特别适合新闻和广播行业。", 
        icon: "fa-video",
        officialLink: "https://www.grassvalley.com/products/edius/",
        cloudLink: "https://pan.baidu.com/s/example-edius"
    },
    { 
        name: "Maya", 
        category: "影视动画", 
        desc: "Autodesk Maya 是一款专业的3D建模、动画和渲染软件，广泛用于电影、游戏和动画制作。", 
        icon: "fa-cube",
        officialLink: "https://www.autodesk.com.cn/products/maya/overview",
        cloudLink: "https://pan.baidu.com/s/example-maya"
    },
    { 
        name: "Nuendo", 
        category: "影视动画", 
        desc: "Steinberg Nuendo 是一款专业的数字音频工作站(DAW)软件，特别适合后期制作和游戏音频。", 
        icon: "fa-music",
        officialLink: "https://www.steinberg.net/nuendo/",
        cloudLink: "https://pan.baidu.com/s/example-nuendo"
    },

    // 数据分析软件
    { 
        name: "Amos", 
        category: "数据分析", 
        desc: "IBM SPSS Amos 是一款专业的结构方程模型(SEM)分析软件，用于统计建模。", 
        icon: "fa-chart-line",
        officialLink: "https://www.ibm.com/products/structural-equation-modeling-sem",
        cloudLink: "https://pan.baidu.com/s/example-amos"
    },
    { 
        name: "Cytoscape", 
        category: "数据分析", 
        desc: "Cytoscape 是一款专业的生物信息学软件，用于可视化分子相互作用网络。", 
        icon: "fa-project-diagram",
        officialLink: "https://cytoscape.org/",
        cloudLink: "https://pan.baidu.com/s/example-cytoscape"
    },
    { 
        name: "Eviews", 
        category: "数据分析", 
        desc: "EViews 是一款专业的计量经济学软件，用于时间序列分析和预测。", 
        icon: "fa-calculator",
        officialLink: "https://www.eviews.com/",
        cloudLink: "https://pan.baidu.com/s/example-eviews"
    },
    { 
        name: "Lingo", 
        category: "数据分析", 
        desc: "LINGO 是一款专业的优化建模软件，用于线性、非线性和整数规划。", 
        icon: "fa-chart-pie",
        officialLink: "https://www.lindo.com/index.php/products/lingo-and-optimization-modeling",
        cloudLink: "https://pan.baidu.com/s/example-lingo"
    },
    { 
        name: "Maple", 
        category: "数据分析", 
        desc: "Maple 是一款专业的数学软件，用于符号计算、数值计算和可视化。", 
        icon: "fa-square-root-variable",
        officialLink: "https://www.maplesoft.com/products/Maple/",
        cloudLink: "https://pan.baidu.com/s/example-maple"
    },
    { 
        name: "MatLab", 
        category: "数据分析", 
        desc: "MathWorks MATLAB 是一款专业的数学计算软件，广泛用于工程和科学研究。", 
        icon: "fa-calculator",
        officialLink: "https://www.mathworks.com/products/matlab.html",
        cloudLink: "https://pan.baidu.com/s/example-matlab"
    },
    { 
        name: "Mathematica", 
        category: "数据分析", 
        desc: "Wolfram Mathematica 是一款专业的计算软件，用于符号计算、数值计算和可视化。", 
        icon: "fa-calculator",
        officialLink: "https://www.wolfram.com/mathematica/",
        cloudLink: "https://pan.baidu.com/s/example-mathematica"
    },
    { name: "Minitab", category: "数据分析", desc: "Minitab 是一款专业的统计分析软件，用于质量改进和数据分析。", icon: "fa-chart-bar" },
    { name: "Mplus", category: "数据分析", desc: "Mplus 是一款专业的统计建模软件，用于潜变量建模和结构方程模型。", icon: "fa-project-diagram" },
    { name: "NCSS", category: "数据分析", desc: "NCSS 是一款专业的统计分析软件，提供广泛的统计方法和图形。", icon: "fa-chart-pie" },
    { name: "Origin", category: "数据分析", desc: "Origin 是一款专业的科学绘图和数据分析软件。", icon: "fa-chart-line" },
    { name: "SPSS", category: "数据分析", desc: "IBM SPSS Statistics 是一款专业的统计分析软件，广泛用于社会科学和商业研究。", icon: "fa-chart-bar" },
    { name: "Stata", category: "数据分析", desc: "Stata 是一款专业的统计软件，用于数据管理、统计分析和图形。", icon: "fa-chart-line" },
    { name: "Tableau", category: "数据分析", desc: "Tableau 是一款专业的商业智能和数据可视化软件。", icon: "fa-chart-pie" },

    // 机械设计软件
    { 
        name: "CATIA Composer", 
        category: "机械设计", 
        desc: "Dassault Systèmes CATIA Composer 是一款专业的3D产品设计软件，用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://www.3ds.com/products-services/catia/products/composer/",
        cloudLink: "https://pan.baidu.com/s/example-catia-composer"
    },
    { 
        name: "Catia V5R20", 
        category: "机械设计", 
        desc: "Dassault Systèmes CATIA V5 是一款专业的CAD/CAM/CAE软件，广泛用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://www.3ds.com/products-services/catia/",
        cloudLink: "https://pan.baidu.com/s/example-catia-v5"
    },
    { 
        name: "Creo Parametric", 
        category: "机械设计", 
        desc: "PTC Creo Parametric 是一款专业的3D CAD设计软件，用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://www.ptc.com/en/products/creo/parametric",
        cloudLink: "https://pan.baidu.com/s/example-creo"
    },
    { 
        name: "Inventor", 
        category: "机械设计", 
        desc: "Autodesk Inventor 是一款专业的3D机械设计软件，支持CAD、CAM和CAE。", 
        icon: "fa-cog",
        officialLink: "https://www.autodesk.com.cn/products/inventor/",
        cloudLink: "https://pan.baidu.com/s/example-inventor"
    },
    { 
        name: "Mastercam", 
        category: "机械设计", 
        desc: "CNC Software Mastercam 是一款专业的CAD/CAM软件，用于数控编程。", 
        icon: "fa-cog",
        officialLink: "https://www.mastercam.com/",
        cloudLink: "https://pan.baidu.com/s/example-mastercam"
    },
    { 
        name: "Powermill", 
        category: "机械设计", 
        desc: "Autodesk Powermill 是一款专业的CAM软件，用于复杂零件的数控编程。", 
        icon: "fa-cog",
        officialLink: "https://www.autodesk.com/products/powermill/",
        cloudLink: "https://pan.baidu.com/s/example-powermill"
    },
    { 
        name: "ProE", 
        category: "机械设计", 
        desc: "PTC Pro/ENGINEER (现称Creo) 是一款专业的3D CAD设计软件。", 
        icon: "fa-cog",
        officialLink: "https://www.ptc.com/en/products/creo",
        cloudLink: "https://pan.baidu.com/s/example-proe"
    },
    { 
        name: "Rhinoceros 犀牛", 
        category: "机械设计", 
        desc: "McNeel Rhinoceros 是一款专业的3D建模软件，特别适合自由曲面设计。", 
        icon: "fa-cog",
        officialLink: "https://www.rhino3d.com/",
        cloudLink: "https://pan.baidu.com/s/example-rhino"
    },
    { 
        name: "Solid Edge", 
        category: "机械设计", 
        desc: "Siemens Solid Edge 是一款专业的3D CAD软件，用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://solidedge.siemens.com/",
        cloudLink: "https://pan.baidu.com/s/example-solidedge"
    },
    { 
        name: "SolidWorks", 
        category: "机械设计", 
        desc: "Dassault Systèmes SolidWorks 是一款专业的3D CAD设计软件，广泛用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://www.solidworks.com/",
        cloudLink: "https://pan.baidu.com/s/example-solidworks"
    },
    { 
        name: "Unigraphics NX", 
        category: "机械设计", 
        desc: "Siemens NX 是一款专业的CAD/CAM/CAE软件，用于机械设计。", 
        icon: "fa-cog",
        officialLink: "https://www.plm.automation.siemens.com/global/en/products/nx/",
        cloudLink: "https://pan.baidu.com/s/example-nx"
    },

    // 电子电路软件
    { 
        name: "Altium Designer", 
        category: "电子电路", 
        desc: "Altium Designer 是一款专业的电子设计自动化(EDA)软件，用于PCB设计。", 
        icon: "fa-microchip",
        officialLink: "https://www.altium.com/altium-designer/",
        cloudLink: "https://pan.baidu.com/s/example-altium"
    },
    { 
        name: "EPLAN Electric", 
        category: "电子电路", 
        desc: "EPLAN Electric 是一款专业的电气设计软件，用于电气控制系统设计。", 
        icon: "fa-electricity",
        officialLink: "https://www.eplan.de/en/solutions/electrical-engineering/",
        cloudLink: "https://pan.baidu.com/s/example-eplan"
    },
    { 
        name: "Multisim", 
        category: "电子电路", 
        desc: "National Instruments Multisim 是一款专业的电路设计和仿真软件。", 
        icon: "fa-sitemap",
        officialLink: "https://www.ni.com/en-us/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim.html",
        cloudLink: "https://pan.baidu.com/s/example-multisim"
    },
    { 
        name: "Proteus", 
        category: "电子电路", 
        desc: "Labcenter Electronics Proteus 是一款专业的电路设计和仿真软件。", 
        icon: "fa-sitemap",
        officialLink: "https://www.labcenter.com/",
        cloudLink: "https://pan.baidu.com/s/example-proteus"
    }
];


// DOM 元素
const searchInput = document.getElementById('search-input');
const softwareContainer = document.getElementById('software-container');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('downloadModal');
const modalClose = document.querySelector('.modal-close');

// 当前选中的类别
let currentCategory = 'all';

// 创建软件卡片
function createSoftwareCard(software) {
    const card = document.createElement('div');
    card.className = 'software-card';
    card.innerHTML = `
        <i class="software-icon fas ${software.icon}"></i>
        <h3 class="software-name">${software.name}</h3>
        <div class="software-category">${software.category}</div>
        <p class="software-desc">${software.desc}</p>
    `;
    
    // 添加点击事件，显示下载弹窗
    card.addEventListener('click', () => showDownloadModal(software));
    
    return card;
}

// 显示下载弹窗
function showDownloadModal(software) {
    document.getElementById('modalTitle').textContent = software.name;
    document.getElementById('modalIcon').className = `software-icon fas ${software.icon}`;
    document.getElementById('modalDesc').textContent = software.desc;
    document.getElementById('officialLink').href = software.officialLink;
    document.getElementById('cloudLink').href = software.cloudLink;
    modal.classList.add('active');
}

// 关闭下载弹窗
function closeModal() {
    modal.classList.remove('active');
}

// 过滤和显示软件
function filterAndDisplaySoftware() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSoftware = softwareData.filter(software => {
        const matchesSearch = software.name.toLowerCase().includes(searchTerm) ||
                            software.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || software.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    
    // 清空容器
    softwareContainer.innerHTML = '';
    
    // 如果没有匹配的软件，显示提示信息
    if (filteredSoftware.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'no-result';
        noResult.innerHTML = `
            <i class="fas fa-search"></i>
            <p>未找到匹配的软件</p>
        `;
        softwareContainer.appendChild(noResult);
        return;
    }
    
    // 显示过滤后的软件
    filteredSoftware.forEach(software => {
        softwareContainer.appendChild(createSoftwareCard(software));
    });
}

// 事件监听器
searchInput.addEventListener('input', filterAndDisplaySoftware);

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 更新选中状态
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 更新当前类别并重新过滤
        currentCategory = button.dataset.category;
        filterAndDisplaySoftware();
    });
});

modalClose.addEventListener('click', closeModal);

// 点击模态框外部关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 初始化显示所有软件
filterAndDisplaySoftware();